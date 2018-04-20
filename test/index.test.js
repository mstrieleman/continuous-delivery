const { describe, before, after, it } = require('mocha');
const { expect } = require('chai');
const express = require('express');
const request = require('request');
const createApp = require('../create-app');

describe('verify get request', () => {
  describe('get', () => {
    it('responds with a string of exercise description', () => {
      request('http://localhost:3000/', (err, response, body) => {
        expect(err).to.equal(null);
        expect(response.statusCode).to.equal(200);
        expect(response).to.be.an('object');
        expect(body).to.be.an('string');
      });
    });
  });
});
