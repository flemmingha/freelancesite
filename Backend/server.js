// This is an example Azure Function for handling a POST request to handle contact form submissions

const azureFunctionHandler = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Import necessary modules
    const sqlite3 = require('sqlite3').verbose();
    const path = require('path');

    // Path to SQLite database file
    const dbPath = path.resolve(__dirname, '../db/mydatabase.db');

    // Connect to SQLite database
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            context.log.error('Error connecting to SQLite database:', err.message);
            context.res = {
                status: 500,
                body: { error: 'Failed to connect to database' }
            };
            return context.done();
        }
        context.log('Connected to SQLite database');
    });

    // Ensure request method is POST
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Insert data into SQLite database
        const query = `INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)`;
        db.run(query, [name, email, phone, message], function (err) {
            if (err) {
                context.log.error('Error inserting data into database:', err.message);
                context.res = {
                    status: 500,
                    body: { error: 'Failed to save contact data' }
                };
                return context.done();
            }

            // Send email (example using console log, replace with actual SendGrid code)
            context.log('Sending email...');
            sendEmail({ name, email, phone, message }).then(() => {
                context.res = {
                    status: 200,
                    body: { message: 'Form data received successfully!' }
                };
                context.log('Email sent successfully');
                context.done();
            }).catch((error) => {
                context.log.error('Error sending email:', error);
                context.res = {
                    status: 500,
                    body: { error: 'Failed to send email' }
                };
                return context.done();
            });
        });
    } else {
        context.res = {
            status: 405,
            body: { error: 'Method Not Allowed' }
        };
        return context.done();
    }

    // Close the database connection when function execution is complete
    context.bindings.db = db;
};

// Function to send email (replace with actual implementation)
const sendEmail = async (formData) => {
    const { name, email, phone, message } = formData;

    // Replace with actual SendGrid or email sending implementation
    console.log('Sending email to:', formData.email);
    // Example: console.log(`Sending email to: ${formData.email}`);

    // Simulate email sending delay (replace with actual asynchronous email sending)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Email sent successfully');
};

module.exports = azureFunctionHandler;
