document.getElementById(`userform`).addEventListener(`submit`, function(event){
    event.preventDefault();

    const firstname = document.getElementById(`firstname`).value;
    const lastname = document.getElementById(`lastname`).value;
    const emali = document.getElementById(`email`).vlaue;
    const phone = document.getElementById(`phone`).value;


    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)){
        alert (`worng phone `);
        return;
    };
    
    const infouser = [
        {key :`firstname`,vlaue : firstname},
        {key :`lastname`,vlaue : lastname},
        {key :`email`,vlaue : emali},
        {key :`phone`,vlaue : phone},
    ];
    console.log(`print infouser:`);
    infouser.forEach(item =>{
        console.log(`${item.key}: ${item.vlaue}`)
    })
})