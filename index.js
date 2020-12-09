const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors()); //CORS validation
app.use(express.static("build")); //Frontend Page
//DEFAULT DATA
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

//GET REQUESTS
app.get("/", (request, response) => {
  response.send("<h1>Backend API for Notes App</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((n) => n.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

//POST REQUESTS
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || Math.random() > 0.5,
    date: new Date(),
    id: generateId(),
  };

  notes = notes.concat(note);

  response.json(note);
});

//UPDATE IMPORTANT REQUESTS
app.put("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((n) => n.id === id);
  note.important = !note.important;
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

//DELETE REQUESTS
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
