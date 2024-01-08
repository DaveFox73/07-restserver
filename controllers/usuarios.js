const { response } = require('express');
const User = require('../models/usuario');

const usuariosGet = (req, res = response) => {

    const {q, name = 'No name', apikey, page, limit} = req.query;

    res.status(200).json({
        ok: true,
        "msg": 'get API - controlador',
        q,
        name,
        apikey,
        page,
        limit
    });
}

const usuariosPost = async (req, res = response) => {

    const body = req.body;
    const user = new User( body );

    await user.save();

    res.status(201).json({
        ok: true,
        "msg": 'post API - controlador',
        user
    });
}

const usuariosPut = (req, res = response) => {

    const { id }  = req.params;

    res.status(200).json({
        ok: true,
        "msg": 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.status(200).json({
        ok: true,
        "msg": 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(200).json({
        ok: true,
        "msg": 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}