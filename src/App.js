
import './App.css';
import MediaCard from "./MediaCard";
import Gate from "./Gate";
function App({number}) {
  return <div><h1> Hello <strong>Hassam!</strong></h1>
  
  <ul>
  <li><h4>I will try do it</h4></li>
  <li><h4>I will definatly do it</h4></li>
  <li><h4>I will surely do it</h4></li>
  <li><h4>I did it!</h4></li>
  <li><h4>I became the Dragon WarRioR!</h4></li>
  <li><h4>My age is {number}</h4></li>
  </ul>
  <p><Gate isOpen={true}></Gate></p>
  <MediaCard title="Media" body={<b>Media Content</b>} imageURL="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"></MediaCard>
  </div>;
  
}

export default App;
