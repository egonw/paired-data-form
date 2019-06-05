import express from 'express';
import compression from 'compression';  // compresses requests
import lusca from 'lusca';
import dotenv from 'dotenv';
import passport from 'passport';
import asyncHandler from 'express-async-handler';

import { DATADIR } from './util/secrets';
import { ProjectDocumentStore } from './projectdocumentstore';
import * as controller from './controller';
import { okHandler } from './config/passport';
import { Validator } from './validate';

import { buildEnrichQueue } from './enrich';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Create Express server
const app = express();

const store = new ProjectDocumentStore(DATADIR);
const enrichqueue = buildEnrichQueue(store.enrichment_store);

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('store', store);
app.set('validator', new Validator());
app.set('enrichqueue', enrichqueue);
app.use(compression());
app.use(express.json());
app.use(passport.initialize());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

// Public api
app.get('/api/projects', asyncHandler(controller.listProjects));
app.get('/api/projects/:id', asyncHandler(controller.getProject));
app.post('/api/projects', asyncHandler(controller.createProject));
app.post('/api/projects/:id', asyncHandler(controller.editProject));
app.get('/api/projects/:id/history', asyncHandler(controller.getProjectHistory));
// Protected api
const protected_api = passport.authenticate('bearer', { session: false });
app.post('/api/auth', protected_api, okHandler);
app.get('/api/pending/projects', protected_api, controller.listPendingProjects);
app.get('/api/pending/projects/:id', protected_api, controller.getPendingProject);
app.delete('/api/pending/projects/:id', protected_api, asyncHandler(controller.denyProject));
app.post('/api/pending/projects/:id', protected_api, asyncHandler(controller.approveProject));

app.use(controller.notFoundHandler);

export default app;
