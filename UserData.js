class UserData{
    constructor(){
        this.name = null;
        this.email = null;
        this.radio1 = null;
        this.radio2 = null;
        this.radio3 = null;
        this.comments = null;
        this.index = null;
    }

    getCount(){
        var voterCountRef = database.ref('voterCount');
        voterCountRef.on("value",(data)=>{
            voterCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            voterCount : count
        });
    }

    update(){
        var voterIndex = "voters/voter" + this.index;
        database.ref(voterIndex).set({
            name:this.name,
            email:this.email,
            ans1:this.radio1,
            ans2:this.radio2,
            ans3:this.radio3,
            comments:this.comments
        });
    }
    reset(){
        this.index = null;
        this.email = null;
        this.name = null;
        this.radio1 = null;
        this.radio2 = null;
        this.radio3 = null;
        this.comments = null;
    }
    
}