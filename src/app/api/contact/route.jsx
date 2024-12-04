import nodemailer from 'nodemailer';

// Reemplaza con tus credenciales SMTP de Brevo
const SMTP_HOST = 'smtp-relay.brevo.com';
const SMTP_PORT = 587;
const SMTP_USERNAME = process.env.SMTP_USERNAME;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

export default async function handler(req, res) {
    console.log('Data', req.body);

    const { name, email, subject, message } = req.body;

    // Configura el transporte SMTP
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
            user: SMTP_USERNAME,
            pass: SMTP_PASSWORD,
        },
    });

    // Crea el correo electrónico
    const emailData = {
        from: 'Formulario contacto Alto Volcanes <web@altovolcanes.com>', // Reemplaza con tu correo electrónico de envío
        to: 'edgardoruotolo@gmail.com',
        subject: { subject },
        html: `
            <p>Hola,</p>
            <p>Tiene un nuevo mensaje de: ${name}.</p>
            <p>Email: ${email}.</p>
            <p>Mensaje: ${message}.</p>
        `,
    };

    try {
        // Envía el correo electrónico
        await transporter.sendMail(emailData);
        res.status(200).json({ submitted: true });
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).json({ error: 'No se pudo enviar el correo electrónico' });
    }
}
