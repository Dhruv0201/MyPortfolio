let me = "Hi, I am Dhruv Khoradiya, a passionate and skilled software developer with expertise in HTML, CSS, JavaScript, JAVA, MERN, SQL, and OOPS. I believe that coding is an art, and I take pride in crafting beautiful, efficient, and functional applications that solve real-world problems. With a keen eye for detail and a relentless pursuit of excellence, I'm always pushing myself to learn and grow as a developer. Whether it's building complex web applications or creating simple yet elegant user interfaces, I'm always up for a challenge. If you're looking for a dedicated and talented developer who can bring your ideas to life, I'm your guy."; 
 


function type(text) {
    let index = 0;
  const typingText = document.getElementById("typing-text");
  function typenext(){
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typenext, 20);
  }
  }
  typenext()
}
type(me);
function type2(text) {let index = 0;
    const typingText = document.getElementById("carrer");
    function typenext(){
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typenext, 20);
    }
    }
    typenext()}
    65
    type2(careerGoalString);

