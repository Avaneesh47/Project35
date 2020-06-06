class Form{
    constructor(){
        this.nameInput = createInput("Name");
        this.emailInput = createInput("Email");
        this.button = createButton('Submit');
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.reset = createButton("Reset");
        this.greeting = createElement('h2');

        //q1
        this.question1 = createElement('h4',"Q1: Should we start a Covid-19 fundraiser?");
        this.radio1 = createRadio('h4');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.radio1.style('width','60px');

        //q2
        this.question2 = createElement('h4',"Q2: Do you think such a fundraiser would be helpful?");
        this.radio2 = createRadio('h4');
        this.radio2.option('Yes');
        this.radio2.option('No');
        this.radio2.style('width','60px');

        //q3
        this.question3 = createElement('h4',"Q3: When do you think India's lockdown will end?");
        this.radio3 = createRadio('h4');
        this.radio3.option('June');
        this.radio3.option('July');
        this.radio3.option('August');
        this.radio3.option('September');
        this.radio3.style('width','60px');
    }
    display(){
        this.title.html("Voter Form");
        this.title.position(displayWidth/2 - 60,0);

        this.nameInput.position(displayWidth/2 - 40,displayHeight/2 - 325);
        this.emailInput.position(displayWidth/2 - 40,displayHeight/2 - 300);
        this.button.position(displayWidth/2 + 30,displayHeight/2 + 200);

        this.question1.position(displayWidth/2 -600,200);
        this.radio1.position(displayWidth/2 -600,250);

        this.question2.position(displayWidth/2 -600,325);
        this.radio2.position(displayWidth/2 -600,375);

        this.question3.position(displayWidth/2 -100,200);
        this.radio3.position(displayWidth/2 -100,250);

        this.button.mousePressed(()=>{
            this.greeting.html("Thanks for your Submission");
            this.greeting.position(displayWidth/2 -30,810);
            voter.name = this.nameInput.value();
            voter.email = this.emailInput.value();
            voter.radio1 = this.radio1.value();
            voter.radio2 = this.radio2.value();
            voter.radio3 = this.radio3.value();
            voterCount+=1;
            voter.index = voterCount;
            voter.update();
            voter.updateCount(voterCount);
        });

        this.reset.mousePressed(()=>{
            this.greeting.hide();
            this.nameInput.value('');
            this.emailInput.value('');
            this.radio1.value();
            this.radio2.value();
            this.radio3.value();
        })
    }
}