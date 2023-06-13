import rockIMG from './assets/rock.svg';
import scissorIMG from './assets/scissor.svg';
import paperIMG from './assets/paper.svg';


const IMAGES = {
  rock : rockIMG,
  scissor : scissorIMG,
  paper : paperIMG
};


function HandIcon({value}){
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;