const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');
const { uploadFile } = require('../services/storage.service');

async function createMusic(req, res){    

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music.id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
}

async function createAlbum(req, res){

        const { title, musics } = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics
        })
        

        res.status(201).json({
            message: "Album create successfully",
            album:{
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        })
    
}

async function getAllMusics(req, res){
    // const musics = await musicModel.find().populate("artist"); // This gives data of artist/user not id
    const musics = await musicModel
        .find() // This give only artist/user id
        .skip(2) // This skip 2 id
        .limit(10) // Maximum 10 id ayegi request karne par

    res.status(200).json({
        message: "Music fetch successfully",
        musics: musics, 
    })
}

async function getAllAlbums(req, res){
    const albums = await albumModel.find().select("title artist").populate("artist", "username email");

    res.status(200).json({
        message: "Albums fetch successfully",
        albums: albums
    })
}

async function getAlbumById(req, res){

    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics");
    
    return res.status(200).json({
        message: "Album fetch successfully",
        album: album
    })
}

module.exports = {createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById};