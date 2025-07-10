# Backend for My Internship Portfolio

This backend provides an API endpoint to receive and store contact form submissions in a MongoDB database.

## 📦 Setup & Usage

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up MongoDB:**
   - By default, connects to `mongodb://localhost:27017/my_internship_portfolio`.
   - To use a different MongoDB URI, set the `MONGO_URI` environment variable.

3. **Run the server:**
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

4. **API Endpoint:**
   - `POST /api/contact`
     - Body: `{ name, email, message }`
     - Stores the submission in MongoDB.

## 🌐 Environment Variables
- `PORT` (optional): Port to run the server (default: 5000)
- `MONGO_URI` (optional): MongoDB connection string

---

**Make sure MongoDB is running locally or provide a remote URI.** 