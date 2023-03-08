/* Modulos requeridos */
const { google } = require('googleapis');
const multer = require('multer');
const fs = require('fs');

/* Configuracion de Google */
const CLIENT_ID = "14975470431-136qdlcg13b84d3n4o8jsc67u64dm55u.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04ifqbD89gmlMCgYIARAAGAQSNwF-L9IrUZpRHRF-QoTcQLk0QNplgj0X8fu_z8c40Kp-wSDuxMn6X14rRbSDvyisK03DSjaqMIY";

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
});

/* Configuracion de Multer */
// Almacenamiento momentaneo
const localDisk = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/subir');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Se subiran los archivos al server local
 const subir = multer({
    storage: localDisk,
}).single('imagen');


const subirAdrive = ('/subir', subir, async(req, res) => {

    try {
        const gDrive = google.drive({
            version: "v3",
            auth: oauth2Client
        });

        const fileMetadata = {
            name: req.file.originalname,
            parents: ['1WcqY4VfU6Qm8M5ELWwkGT4DAMpt9RPlR']
        };

        const media = {
            mimeType: req.file.mimetype,
            body: fs.createReadStream(req.file.path)
        };

        const { data } = await gDrive.files.create({
            resource: fileMetadata,
            media: media,
            fields: "id"
        });

        console.log(`https://drive.google.com/uc?export=view&id=${data.id}`);

        const result = await (`https://drive.google.com/uc?export=view&id=${data.id}`)
                
        res.json(result)

        fs.unlinkSync(req.file.path);

    } catch (error) {
        console.log(error);
    }
});

module.exports = {subirAdrive, subir}


