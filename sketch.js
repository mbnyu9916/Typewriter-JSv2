let title, poem, textbox, addBtn;

function setup() {
  noCanvas();
  noLoop();
  
  title = createP("TypeWriter JS");
  poem = createDiv('');
  textbox = createInput('');
  addBtn = createButton('Add Line');
  
  addBtn.mousePressed(() => {
    let userLine = textbox.value().trim();
    if (!userLine) return;
    
    textbox.value("");
    
    let row = createDiv().parent(poem);
    let textSpan = createSpan(userLine).parent(row);
    let slider = createSlider(0, 360, floor(random(360)), 1).parent(row);
      //slider.style('display', 'inline-block');
    //slider.style('margin-left', '10px');
    
    let applyColor = () => textSpan.style('color', `hsl(${slider.value()}, 80%, 50%)`);
    
    slider.input(applyColor);
    applyColor();
  });
}
