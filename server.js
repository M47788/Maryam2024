const express = require('express');
const path = require('path');
const app = express();

//maryam 

app.use(express.static(path.join(__dirname,'build')));
app.get('*/', function(req,res){
  res.sendFile(path.join(__dirname,'build','index.html'));
});
//yes, the main is here before rebaseq,
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

