import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

Polly.register(XHRAdapter)
Polly.register(LocalStoragePersister)

const { server: testServer } = new Polly('testing', {
  adapters: ['xhr'],
  persister: 'local-storage'
});

export const server = testServer
