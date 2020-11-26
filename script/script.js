let inputUser1=document.querySelector('.user1__form-input');
    inputUser2=document.querySelector('.user2__form-input');
    submitUser1=document.querySelector('.user1__form-submit');
    submitUser2=document.querySelector('.user2__form-submit');
    formUser1=document.querySelector('.user1');
    formUser2=document.querySelector('.user2');
    messageToShowUser1=document.querySelector('.mainMessage__User1');
    messageToShowUser2=document.querySelector('.mainMessage__User2');
    idMessagesUser1=0;
    idMessagesUser2=0;
let objectForMessages=[//Объект для сообщений
        [],
        []
    ];
    submitUser1.addEventListener('click',(event)=>{
        event.preventDefault();
        let message=inputUser1.value;//получает значение
        inputUser1.value='';//очищает инпут
        let nowaDate=new Date();
        let messageObject={
            name:'User1',
            date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
            messages:message
        };
        objectForMessages[0].push(messageObject);
        messageToShowUser1.textContent+=objectForMessages[0][idMessagesUser1]['date']+':'+objectForMessages[0][idMessagesUser1]['name']+':'+objectForMessages[0][idMessagesUser1]['messages'];
        idMessagesUser1++;
        formUser1.classList.add('hidden');
        messageToShowUser2.textContent='';
        formUser2.classList.remove('hidden');
    });
    submitUser2.addEventListener('click',(event)=>{
        event.preventDefault();
        let message=inputUser2.value;
        let nowaDate=new Date();
        inputUser1.value='';
        let messageObject={
            name:'User2',
            date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
            messages:message
        };
        objectForMessages[1].push(messageObject);
        messageToShowUser2.textContent+=objectForMessages[1][idMessagesUser2]['date']+':'+objectForMessages[1][idMessagesUser2]['name']+':'+objectForMessages[1][idMessagesUser2]['messages'];
        idMessagesUser2++;
        formUser1.classList.remove('hidden');
        messageToShowUser1.textContent='';
        formUser2.classList.add('hidden');
    });


