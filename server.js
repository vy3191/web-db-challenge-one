const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.get("/", (req,res) => {
    res.json({msg:`working now`});
});

server.get("/api/accounts", (req,res) => {
    try {

    }catch(err) {
       res.status(500).json({msg:`something went wrong with server`});
    }
});

server.get("/api/accunts/:id", (req,res) => {
  try {

  }catch(err) {
     res.status(500).json({msg:`something went wrong with server`});
  }
});

server.post("/api/accounts", (req,res) => {
  try {

  }catch(err) {
     res.status(500).json({msg:`something went wrong with server`});
  }
});

server.put("/api/accunts/:id", (req,res) => {
  try {

  }catch(err) {
     res.status(500).json({msg:`something went wrong with server`});
  }
});

server.delete("/api/accunts/:id", (req,res) => {
  try {

  }catch(err) {
     res.status(500).json({msg:`something went wrong with server`});
  }
});

module.exports = server;