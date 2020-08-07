var message = document.getElementById('message');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
        //speechrecognition provides the functionality to recognize voice from any mic
        //SpeechRecognition constructor id used to create a new speechRecognition object which has a number of event Handlers
        //grammar list defines particular set of grammar which the application must be able to recognize
        //setting the type of grammar 
        var grammar = '#JSGF V1.0;';
        //object of speecRecognition
        var recognition = new SpeechRecognition();
        //Constructor for the grammer list
        var speechRecognitionGrammarList = new SpeechGrammarList();
        //setting the type of the grammar for the Grammar list
        speechRecognitionGrammarList.addFromString(grammar , 1);
        //joining recognition and grammarList
        recognition.grammers = speechRecognitionGrammarList;
        recognition.lang = 'en-US';
        //we need the final results when the user completes speaking
        recognition.interimResults = 'false';

        recognition.onresult = (event)=>{
            var last = event.results.length-1;
            var command = event.results[last][0].transcript;
            message.textContent = 'Voice Input: ' + command + '.';
            if(command.toLowerCase() === 'select apple' || command.toLowerCase() === 'check apple'){
                document.querySelector('#chkApple').checked = true;
            }
            else if(command.toLowerCase() === 'select pineApple' || command.toLowerCase() === 'check pineApple'){
                document.querySelector('#chkPineApple').checked = true;
            }
            else if(command.toLowerCase() === 'select cherries' || command.toLowerCase() === 'check cherries'){
                document.querySelector('#chkCherries').checked = true;
            }
            else if(command.toLowerCase() === 'select apricots' || command.toLowerCase() === 'check apricots'){
                document.querySelector('#chkApricots').checked = true;
            }
            else if(command.toLowerCase() === 'select watermelon' || command.toLowerCase() === 'check watermelon'){
                document.querySelector('#chkWatermelon').checked = true;
            }
            else if(command.toLowerCase() === 'select orange' || command.toLowerCase() === 'check orange'){
                document.querySelector('#chkOrange').checked = true;
            }else if(command.toLowerCase() === 'submit' || command.toLowerCase() === 'submit basket' || command.toLowerCase() === 'submit list'){
                submitFunction();
            }
        }
        recognition.onspeechend = ()=>{
            recognition.stop();
        }
        recognition.onnomatch = function(event) {
            message.textContent = "Well.. Try speaking 'select' and then the name";
        }
        recognition.onerror = (event)=>{
            message.textContent = 'Error occured in Recognition ' + event.error;
        }
        document.querySelector('#btnGiveCommand').addEventListener('click' , ()=>{
            recognition.start();
        })
        document.querySelector('#submitButton').addEventListener('click' , (event)=>{
            submitFunction();
            })
        submitFunction = (event)=>{
            const mainContent = document.querySelector('.main-content');
            mainContent.innerHTML = "<h3>Your Basket has been Submitted<br><br>Refresh the page for making the Basket again</h3>";
        
        }