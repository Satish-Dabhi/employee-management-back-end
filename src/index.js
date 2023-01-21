const express = require("express"); 
const  employeesRoutes = require("./routes/employ");

const app = express(); 
const PORT = process.env.PORT || 3005; 

app.get("/", (req, res) => { 
    res.send("Working ...:)"); 
}); 

app.use("/employ",  employeesRoutes);

app.listen(PORT, () => { 
    console.log(`Server running on ${PORT}`); 
});