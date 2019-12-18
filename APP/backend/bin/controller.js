const mongoose = require("mongoose");
const Calificacion = require("./model/calificacione");
const Instructor = require("./model/instructore");
const Cliente = require ("./model/cliente");

var service = require('./service');

class controller {
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect('mongodb+srv://nellynarvaez34:32192609@cluster0-agr0q.mongodb.net/gimnasiofdl?authSource=admin&retryWrites=true&w=majority', {useNewUrlParser:true});
            console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }

    }

    emailSignupC(req, res) {
        var cliente = new Cliente(req.body);
        
        cliente.save(function(err){
            return res
                .status(200)
                .send({token: service.createToken(cliente)});
        });
    };
    
    emailLoginC(req, res) {
        Cliente.findOne({ email: req.body.email }, function(err, user) {
            if (err) throw err;
            if(user !== null){
                if(user.password === req.body.password){
                    res.send({ status: 200, token: service.createToken(user)});
                } else {
                    res.send({ status: 400, message: 'La contraseña es incorrecta'});
                }
            } else {
                res.send({ status: 400, message: 'El usuario no existe'});
            }
            
        });
    };

    emailSignupI(req, res) {
        var instructor = new Instructor(req.body);
        
        instructor.save(function(err){
            return res
                .status(200)
                .send({token: service.createToken(instructor)});
        });
    };
    
    emailLoginI(req, res) {
        Instructor.findOne({ email: req.body.email }, function(err, user) {
            if (err) throw err;
            if(user !== null){
                if(user.password === req.body.password){
                    res.send({ status: 200, token: service.createToken(user)});
                } else {
                    res.send({ status: 400, message: 'La contraseña es incorrecta'});
                }
            } else {
                res.send({ status: 400, message: 'El usuario no existe'});
            }
            
        });
    };

    delUser(id, res) {
        Cliente.findOneAndDelete({ _id : id }).exec((err, user) => {
            if(err) throw err;
            res.send(user)
        })
    }
    

    // getCalificaciones(res, valor){
    //     Calificacione.find ({}, (err, calificacione) =>{
    //         if(err) throw err;
    //         res.send ( calificacione );
    //     })
    // }

    // getInstructore(res){
    //     Instructore.find({}, (err,instructore) => {
    //         if(err) throw err;
    //         res.send( instructore )
    //     })
    // }

    // setCliente(cliente,res){
    //     Cliente.create(cliente, (err, ncliente) => {
    //         if (err) throw err;
    //         res.send ({newCliente:ncliente})
    //     })
    // }

    // getCliente(res){
    //     Cliente.find({}, (err, Cliente) => {
    //         if (err) throw err;
    //         res.send ( Cliente )
    //     })
    // }


}
exports.controller = new controller()



