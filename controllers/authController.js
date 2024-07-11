// const User = require("../models/User");
// const { body, validationResult } = require("express-validator");

// exports.user_register_get = (req, res) => {
//     res.render("user_register_form", { title: "User Register", errors: [] });
// }

// exports.user_register_post = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).render("user_register_form", { 
//             title: "User Register", 
//             errors: errors.array() 
//         });
//     }
    
//     try {
//         const user = new User(req.body);
//         await user.save();

//         // Renderiza la vista de éxito después de registrar al usuario
//         res.render('registration_success', { title: 'Registration Successful', user });
//     } catch (error) {
//         console.log("Ha habido un error:", error);
//         res.status(500).render("user_register_form", {
//             title: "User Register",
//             errors: [{ msg: "Error al crear el usuario. Por favor, intenta de nuevo." }]
//         });
//     }
// }

// exports.user_login_get = (req, res) =>{
//     res.render('login')
// }

// exports.user_login_post = async (req, res, next) => {
//     const { username, password } = req.body;

//     try{
//         const user = await User.findOne({username, password})
//         if(!user){
//             return res.status(401).render('login',{
//                 error: "User not found, rellena credenciales bien bien"
//             })
//         } 

//         res.render('dashboard', { user });

//     } catch (error){
//         console.log('Error en la autenticacion: ', error);
//         res.status(500).render('login',{
//             error: 'Error inesperado intenta de nuevo.'
//         })
//     }
// };


const User = require("../models/User");
const { body, validationResult } = require("express-validator");

exports.user_register_get = (req, res) => {
    res.render("user_register_form", { title: "User Register", errors: [] });
};

exports.user_register_post = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("user_register_form", { 
            title: "User Register", 
            errors: errors.array() 
        });
    }
    
    try {
        const user = new User(req.body);
        await user.save();

        res.render('registration_success', { title: 'Registration Successful', user });
    } catch (error) {
        console.error("Ha habido un error:", error);
        res.status(500).render("user_register_form", {
            title: "User Register",
            errors: [{ msg: "Error al crear el usuario. Por favor, intenta de nuevo." }]
        });
    }
};

exports.user_login_get = (req, res) => {
    res.render('login');
};

exports.user_login_post = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        
        if (!user) {
            return res.status(401).render('login', {
                error: 'Usuario no encontrado. Verifica tus credenciales.'
            });
        }

        res.render('dashboard', { user });

    } catch (error) {
        console.error("Error en la autenticación:", error);
        res.status(500).render('login', {
            error: 'Error inesperado. Por favor, intenta de nuevo.'
        });
    }
};
