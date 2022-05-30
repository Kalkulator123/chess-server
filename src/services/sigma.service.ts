export class Sigma {
	public draw() {
		const art = `
        #####%#%%%%%%%%%%%#%#%%%#%&&&&@&@&&&&@&@&@%&&@&@@%&%#&&&&&@&%@%&%&@&@%@&&@&&@@@&&@@&&@@&@&@&@@@@@@@@@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ####%#%%%%%%%%%%%%%%%%&&&&&&&&&&&@&&&&&%&&&&@&%&@&&&%%%%&@&@@%&&@&@@@@@@@&@@@@@&&@@@&&@@@@&@@&@@&@@@@@@@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######%%%%%%%%%%%%%&&@&@@@&&&&&@@@&&&@@&&&%@&&&&&&&&@%&%%%&&@&&&@@@&@@@@@@@@@@@@@@&@&@@@@@@@@@@@@@@@&@@@@@@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ########%%%%%%#%%@@&&&&@&@@@@@@&&&&&&@@@&&@@&&&%&&&&&&&&&&&%&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@@&@@&@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###########%#%&&@@@&&&&&&&@@&&&@@@@&@&%&%%&%&&&&&&%%%%%&%%%%%%%%&%&%&&&&&&&&&&&&&&&@&@@@@@@@@@&&@@@&@@@&&&&&@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###########%%&&&&&%%&&&&&&&&&&@@@@@&&&%&&&&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&@@&&&&%&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ############&@&&&&&@&&@&&%&&&&&&&@&&&&@&&%&&&&&%%%%%%##########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%%%%%%%%%%%###%&@&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##########%@@@@@@@@&&&&&%&&&@&@@@@@&&&@@&&&&&&%%%################%%%%%%%%%%%%%%%%%%%%%%%%&%%&%%%%%%%%%########%&@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##########&@@@@@@@@&@&&&&@@@&@&@&&&@&&&@&&&&&%%%#####%###############%%%%%%%%%%%%%%%%%%&&&&&%%%%%%%%%###########&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #########&@@&&&&&&@&&&&&&%%%%&&&@@&&@&@&&&%%&&%%%#####################%%%%%%%%%%%%%%%%%%%%%%%%%%&%%%##########(##%@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ########%&@&@@@&&&@@&&&&&&&&&&&&@&@&&&&@&&%%%%%%%%%##############%#####%%%%%%%%%%%%%%%%&&&&%%%%%%%%%#%%%%####((####&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ########&&&&&@&&@@&@&&&&&&&&&&@@&&&&&&&&&%%%%%%&%%##############%%%##%%%%%%%%%%%%%%%%&&%&&&&&&&%%&&&%%%%#####(##(#(#%&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #######%@&&&&@@&&&&&@&&@&&&&&&@&&&&%&%%&%#%&#%%#%%%#######%%########%%%%%%%%%%%&%&&&&%%%&&&&&%%&&%%%%%%%%%%###(((#(##&@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #######&&&&&@&&&&&&@@@&&&@&&&&&&&&%%%&&%&%%%%#&%%###################%#%%%%%%%%%%%%%%%%%%%&&%%%%%%%%%%%%%%%%%##((#(/((#&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######%@&&@@&@@@&&@@@&&@&&&&&&&&%&&&&%#%&&%%%%####################%%%%&&%&&&%&%%%%%&%&%&&%&%&&%%%%###%%%%%%%%#((#(((((%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######@&&&@@&&@&@&@&&&@&&&@&&&&&&&&%%%%%%%#####################%%%%&%&%&%&&%&&&&&&&&%&&&&&&&&&&%%%%(##%#%%&%%#(#####(((&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #####%&&@&&@@@@@@@@@&&&@&&&@%%%%&&&&&%%###################%%%%&&%&&%&&@&&@@@&&&&&&@&@&&&&&&@&&&%%%#%%##%&&&%#(#%##(((((%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #####%@@@@@@@@@@@@@&&&&&&&&&&&&&&%%%%####################%%&%%&&&&&@&&@@@@&@@@@@@@@@@@@@@@&&%&&&&%&&%#%#%&&%##(%##/(((((&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######@&&@@@@@@@@&&&&%&&%@&&%&&&&&%%######(###########%%%%&&&&%&%%%%%%%%%&&&&&&&&@@@@@@@@@@@@@&&&&&%%&%&&&%####%#((#((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #####%&@&@@@@@@@&@&&&&&&&&&&&&&%%%%####(((#########%##%%##%%%%%%%%%%&%&&&&&&&&&&&@@@@@@@@@@&@@@@@@&&&&@&&#%#%%&&%####/#/(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######&@&@&&@@&&&&&&&%&&&&&&&&&%%%#############%######%##%%&%#%%&&@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&&&&&&&&&#%&#&&&&&&&%%%#(#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######%&&&%%#%&&&&&&&%&&&&&@&&&%%############%##%###%#%%&%%&&&&@&@@@@@@&&&@@@@@@@@@@@@@@@@&&&%%%&&%%&%&%%%&&@@@&@&@&@&&&%#&@%%%%%%%%%%%%%%%%%%%%%%%%%%
        #######%%&&%#####%%%%&&%&&&&&&%%%#################(####%%%%%&&&%%%%&%%&&&&&&@@@@@@&@@@@@@@@&&%%%####%%%#/#&&@@@@@@@@@@@&@@&&%&%&%%%%%%%%%%%%%%%%%%%%%%
        ######&&&%#(/(#####%###%%&&&&%%%####################%%%%%%%%&&&&&&&%&&&&&&&&&&&@@&@@@@@@@@@&%%######%%%#/#%&&&&&@@@&&&@&@@@&&%&%%%%%%%%%%%%%%%%%%%%%%%
        #####&&%##(###%#((#((###%&%&&%&%%########(#######%%%#%%%#%%%%&%&&&&&@&&&&&@&@&@@@@@@@@@@@@&&%#######%%%%(&@@@@@@@@@@&&%%(((#%%&%%%%%%%%%%%%%%%%%%%%%%%
        ####%&&%##%%%%####(#((((&%%&%%%%%#################%##%%#%%%%%%%&&&&&&&&&@&&@@@@@@@@@@@@@&&&%%%%####%%%%%%##@@@@@@@@@@&@@@%%##%%%%%%%%%%%%%%%%%%%%%%%%%
        ####%@####%####(#%((####%&&%%%%%%(###########(############%##%%%%%%%&&&&&&&&@&@@&@@@&&&&&%%#%%######%%%%%%#&@@@@@@@@&@@@@@&###%%%%%%%%%%%%%%%%%%%%%%%%
        ####&#%%%%%%&&&&&%(#####%&&&&&%&%%####################(####%#%%%%%%%%&&&&&&&&&@&&@&@@&&&%%%%%#######%%%%%%%#@@@@&&&&&&@@@&#%&%%%%%%%%%%%%%%%%%%%%%%%%%
        ###%%&&&&&&&&&%%##(#%####&&&&@&%%&#%####%#############%########%%%%%%&&&&&&&&&&&&&&&&&&%%#############%%%%%%(&@@@&&&#(##&##%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ####%&&&&&&&%%###########&&&&&&&%%%%%####%##########%########%%%%%&%&&&&&&&&&&&&&&&&&&&&%%#####(########%%%%%(%&@@&%#%%(#(%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #####%&@&@&%%##((((####(#%&&&&&&&&&%%##%#%#######%#%%%###%%%%%%%%%%&&&&&&&&&&&&&&@&&&&&&%%%%%############%%%%%#%&%&&%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ####%%(%&@&&%#(###(#####%%&&&&&&%&%&%%################%%%%%%%%%%%&&&%%&&&&&&&@@&@@&&&&%###%#%%%%%%%%%#####%%%%%##%%&%%%###((%%%%%%%%%%%%%%%%%%%%%%%%%%
        #####%%%####(%&&%%%((###%&&&&&&&&&%&&%%%##%%%##%######%%%&%%%%%%%%%%%&%%&&&@@@@&&&&&&&&###(((#(####((((##%%%&%%#/#%%%###(///%%%%%%%%%%%%%%%%%%%%%%%%%%
        #########%%####%%%#((#(#&&&&&%&&%%&&%&%##%&&#&#%%&%%%%&&&&%%#%%%%%%%%%&&@@@@&&&&&&&&&&%&%##%&@@@@@&%####%%%%&%%((%%##%#(/(//(%%%%%%%%%%%%%%%%%%%%%%%%%
        #######################&&&&&&&%(&&%&%&%&%%&%&&&&&&&%&&&@&&#%#%%#%%%&@@@@@@@@@@&&&&&&&&&&&&%%%%%%%%%%&&&%%&&%%#(((&&&%((#//***%%%%%%%%%%%%%%%%%%%%%%%%%
        ##########%######%#%#%%&&&&&&&%&&%#%%&%#%%%%%%&@&&&@&&&@&%%%%##%&&@@@@@@@@@@&@&&&&&&&@@&&@@@@&&@&&&&&&&&##&&&&%%@@@&&%((*,**(%%%%%%%%%%%%%%%%%%%%%%%%%
        ###########%#%%####%%%%&%&%&%&(&&#%%&#%&&&%@&&%&%&&@&@@&&%%%#%%&@@@@@@@@&@@&@&@@@&@@@@@@@&@@@@@@&&&@@@&%/&&%%#%@@@&&&%#(*,*/%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###########%###(#((#%#&&&&%%&&%%&%%&&#@%%&&@&&&&&&&@@&@@&%%##%&@@@@@@@@@@@&&@@@@&&&&&@&@@@@@@@@@&@&@@@&#%%&%&%%%&@@%%##///(%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ################(((#%%&&%%&&%&%&&#&%#%%&&&&&@&&&&@&@@@@&&&%%%%&@@@@@@@@&&%%%%%%%%%%%%%%&&%&&&&&%&&&@@@&&%(%&%&%&%&&&%/#(((%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################(#%&&&#&%&%%&&%&%&%&%&%&&&&&&&@@@@@@@@&@&&%%&@@@@@@@@@@@@@&&&&&&%%&%&%&&&&&&&&&&&@&&%%&%#%&%&%%&@%%((#(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #################(#&&%%%%#%&#%&&%&&&&&&&&%%&&&&@&&@@@@@@&&&&&&%&@@@@@@@@@@@&&&##%%((%%%#%%&&&&&%&&&&&&%%##((#%&&&&&%%((#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###################%&&#%&&&#&#&%&&&&&&&&&&&&&&&&@@&@@@@@@@&&&&&%@&@@@@@@@&&&&&&&&#/(#%#(##%(/##%&&&&&%&%%###(##&&&##%##%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###################%&@&#%%%#%%#%%%&&%&&&@@&@@@&@@&@@@@@@@&@&&&&@&&@@@@@@&&&%%%&&&&&&&&&%&%%(####%%#(*.(##&&&%%&&&@&%%#&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################%%&&&#%&%%&%#&&%%&&@&&&&@&@@&@&@&@@@@@@@@&&@&&&@@@@@@@@@&&%&&%%&%%&&&&&&%%&&%%####*/(**@@@@@@@@@%%#&&#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################&&&%%%%%%%%%#%&@%&%%%&@@@@&&@&&@@@@@@@@@@@&%&&@@@@@@@@@@@&@&%@%&&%%%%%%&&&&&&&%%%%%%#((((#%@@@@&&#@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ################(#%&&&%@%&%%%%%%%%&&&%&&&@@&&@@&@@@@@@@@@@@@&@&&@@@@@@@@@@@&&&&&&&%&%&%%%%%&%%%&%%%###((((#((&@@&&%&@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################%&&@&&&%&%#%%#&&%&@&@&&&&&&&@@&@@&@@@@@@&&&&@&&@@@@@@@@@&@@@@&@&@&@&@&&&&&&&&&&&%#%(((//(((&&&&%&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################(%&@&&&%&&&%%&&%&&%@@%&&@&&@@@@@@@@@@@@@&&%&@@@@@@@@@@@@&@@@@@@@@@@@&&@&@@@@@@&&&@&&%&%%%%%&&@%#&&&%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################(#%&@&@&&&&&&&%&&&&&&@@&@@&@&@@@@@@@@@@@@@&&@@&@@@@@@@@@@@&@@&&&@&@@&@&&@@@@@@@&@&#&(#(%&&%%&&%%@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ######################&&&&&&&&@&@&&%@&@&@&@@&@&@@@@@@@@@@@&&&&&@&@@&&@@@@@@@@@&@@@@@@@@@@&&@@@@&&&&&&&##%#&%%%&&%#&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###################(####%&&&&&&@@&&&@&&&@@&&&@@@@@@@@&@@@@&@&%&&&&@@&@@@@@@@@@@@@@@@@@@@@@@&@@@@&&&%&####&%%&@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #################(########%%%&&@&@&@@&@@@@&@&&@&@@@@@@@@@@@&@%&@@&@&&&@@@@@@&@@@@@@@@@@@@@@@@&@@%@&%#&%#%&%&%%%%%(%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #######################(#######%#&@@&@@@@@@&@&&&@@@@@@@@@@&@&&&%@&@@&@@@@@@&@@@@@@@@@@@@@@&@@@&&&@&&&&&%@%&&&&%%##(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ####################(##############%%%&&&&@@@@@@@@@@@@@@@@@&@&%&&@&@&@&@@@@&@@@@@@@@@@@@@@@@@@@&&@@@&&%&&&&&&&%#%#/#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ################((####(##############%#%#%%&&@@@@@@@@@@@@@@&&&&&@@&&&@&@@@&&&@@@@@@@@@@@@@@@@@@@@@@@&&@@&&&&&%&%%#%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##################(####################%##%#%%&&&&@@@@@@@@@@@@&&&&&&&@&&&&&&&@&@@&@@@&@@@@@@@@&@@@@&&&&&&&&&%&%(###/#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##############(###(#(###################%###%%%%%&&&@@@@@@@@@&&%@&@@&&&&&&%&&&&@%@&@@@@@&@@@&@@@@&@@&&&%&&%%%#%##(##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ##############(##((###########%#####%#######%%%%%%%%%%&@@@@@@@@@&&&@%&&&%&&&@%&&@@&@@&&@@@@@@@@@@@@&&&&&&%%%%%(#%/(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        ###%#######((#((###############%##%####%#%%#%#%%%#%%%%%%&@@@@@@@&&@&&&@&@@&%&&&@&&&&@@&&@@@@@&@@@@@&&@&&@%%#&%%#%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        #%%%#####(####((#(#((########%####%#%%##%#%%%%%%%%%%%%%%%%&@@@@@@@@&&&@@&&&@&@@&&@%@&@@@@@@&@@@@@@&@@@&&&@#&#%%##%#%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        `;
		const art2 = `
                                            ......                      ...........                         
                                  ..........              ..',;:cclllllllcc:;,'..                   
                               ...............        .;clooooolllllooooollooooll:,..               
                              .................    .:okOOOkkkxxxxdddddoooooollolloooc;.             
                            ............   .... .:odkxxxxxxxxxxxxxxxxkddxkxxxxddddooool:.           
                            .............  ....'ldoooolloolllololccloc;:lddxxkkkOOkkkkxxxc.         
                         ...   ..............':ccloooooooocclooc;:llccddcloccooodxxkkOOOOOd'        
                       ........   ..........';;:lolooooooc:lolc::llcdxO0dcl:,clollloodxxkOOd'       
                      ..........    ........'';loooollllc;colclccclkOkKXOlccc::llcclooooodxko.      
                     ..........        ......;llloooc:c:;;cclxdccoOKO0XXKxc:lo:;lc;colllooood,      
                     .........           ...,lc:lol:;ccll:clxklcx0XKOKXXX0dclkd;;:,,cl:coollo:.     
                     ..........       ..   .::,coc:;:coOdo0KKxoxOKXXXXXXXK0ockkl,';;,:,,llcclc.     
              ....    ...........  ...... .,:;:ll:;;cx00xoolllx0000XXXXX000Ox0K0x;cd;,'.:l::lc.     
            .........  ......';;'....... ,l;;cccc:,ck0xddddxdollxKXXXXXXXKOdddoooco0o,'',;,;c,;;.   
           ...........   ..'lOKKk;....  ;dl;oOo:clckXKKXNNXXXXNXKXXXXXXXXKkkO00Oxolldlc:''.,:';xl.  
           .........      .lKXXXXd.    ,dolcxKd:oddONXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXkk00o'',',,:oxc  
           .........      ;0NXXXNx.   .ldlocxKkollx0NXXXXXXXXXXXXXXKKXXXXXXXXXXXXXXXXXXx',;'clcldx, 
           ..........     lXXXXXXd.   ;dolollO0kook0XXXXXXXXXX0kO000KKXXXXXXXXXXXXXXXXXd;ldoxocloxl.
    ....    ..............lXXXXXXo.  .colool:cOKxxOKNXXXXXXXNO;.;ccclloooodx0XXXXXXXXXOllxxkxc:oldd'
  .........  .............cKNXXXKo.  'oolol:,';oodOKNXXXXXXXXd';ccoddxxxxdo:dXXXXXXXXKocoxxxl,;llox;
 ..........    ...........cO00K0Ox;  ,oool:,''''':oONXXXXXXXXo;coxOOOOOOOOOdxXXXXXXXXkldxxdc,',:loxc
 .........         ..,:oxO0K00Oxdxd' ;oooc,''''''''c0XXXXXXXXdcxOOOOOOOOOOOxkXXXXXXX0oloc:,'''';codl
..........       .;lx0XXXXXXXXXKOxdl,:dlc,'''''''...'dKXXXXXXOdkOOOOOOOOOOxxKXXXXXXKo,,'''''''',:ldl
 .........      ,kXXXXXNXXXXK0KXXKdoolol;'''''''.     'lOXXXXKkxOOOOOOOOOxxKXXXXXKk;.',''''''''';ldl
  .............:0XK000000OOkxddxOkodxllc,'''''..        .;d0XXXOxxkkkkkxxOKXXX0kl,.  .'''''''''',cd:
   ..........,dKXX000KKXXXXKK0Okkolxxlx0koc,..            cO00000OOOOOO0KK0ko;..      .''''''''',co,
     .......;OXXXXNXXXXXXXXXXXXXX0ooxlxXNNX0d:...    ....;OXNNXK00Okxdlc:;':lc;'.      .''''''''':c.
           .lXXXXXXXXXXXXXXXXXXXXOooddkKNNNNNNKOkxooxO00000000XNNNX0kl;cc::ldxxxc.       .''''''':; 
            'OXXXXXXXK00OOkkkkkkkdlodkOKNNNNNNNNNNXK0OOKNNNNX000KNNN0llko:dOkOxol.        .''''',;. 
            .dXXXXXXXKKKKKKKKK00kdlld0O0NNNNNNNNNNNNNKOkOKNNNNNKOxO0kdk0dlxkkOxdo.          .''''.  
             :KXXXXXXXXXXXXXXXXXOkdco000NNNNNNNNNNNNNNNXKKXNNNNNNKOOxlk0Okxxxxxkko,           ...   
             .xXXXXXXXXXXXXXXXKOkdood000NNNNNNNNNNNNNNNNNNNNNNNNNNNNKdkKKK0000KKNNXx;.              
              'kXXXXXXX0Okkkxxdoolddd000NNNNNNNNNNNNNNNNNNNNNNNNNNNNXxxXNNNNNNNNNNNNXx,             
               .dKXXXXXKKKKKK0kxlokxd000NNNNNNNNNNNNNNNNNNNNNNNNNNNNXkxKNNNNNNNNNNNNNX0c.           
                 ,dKXXXXXXK00OxdoododK00NNNNNNNNNNNNNNNNNNNNNNNNNNNNNOd0NNNNNNNNX0KNNNX0:           
                   'oOKK0Okxdolloddok0OKNNNNNNNNNNNNNNNNNNNNNNNNNNNNN0dOX00NNNNNKoxNX0KXk,          
                    .:dxddddoodxkkxk0O0NNNNNNNNNNNNNNNNNNNNNNK0XNNNNNKxk0ccKNNNNNXXNNO0X0l.         
                     'dkkkkkkkkkkxxOkk0K000000000000KKKKKK0kk0XNNNNNNXxxKO0NNNNNNNNNN0OK0x;         
                     .:dkkkkkkkkxdxddkkkkkkkkkkkkkkkkkkxdolo0NNNNNNNNNkdKNNNNNNNNNXXNKkOOOo.        
                      .,cdxkkkkxodddkkkkkkkkOkkxxxxddddddxkKNNNNNNNNNN0d0NNNNNNNNNxxXXkxkkk:        
                         .;ldddddddkOkkxdoc:;,..,dxxkkkOkOKNNNNNNNNNNNKdkNNNNNNNNN00NNOxkkOd'       
                            ..';,,:;,'...       ;kOkkkkO0XNNNNNNNNNNNNXxxXklONNNNNNNNNKxxOkkl.      
                                                ckkkkkOKNNNNNNNNNNNNNNNkdK0xKNNNNNNNNNNkxkkkx,      
                                               .oOkkkOKNNNNNNNNNNNNNNNNOd0NNNNNNNNNNNNN0dkOkOl.     

        `;
		const art3 = `
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooollcc:::;;;;;;;;;;;;;:ccloooooooooooooooooooooooooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooollcc:;,'''......................,:ccooooooooooooooooooooooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooolllcc::;,'''............................. ..',;cooooooooooooooooooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooool:;,,''........................................  ....';cccclooooooooooooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooo:................   .......   ..............................':looooooooooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooo;..............     ...',::cllcc:;,'..................     ...,:looooooooooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooooc..........''........;dkO000000000Okxoc:,.............    ....,,;clooooooooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooool'........,;,'......:dxxxkkkOO0000000000Oxo;................''..',;loooooooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooooo;........,,''............'',;;cloxO0000000Oo'.............',;'. ..'cooooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooooc.............  ..................,:lxO0000x:'.........','.....    .:oooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooool,...........  .......................,cxkxl,.....'''..';;.         .:ooooooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooooo:..........,:'...........  .............,,,'.....''.',,,,'          .coooooooooooooooooooooooooo
        ooooooooooooooooooooooooooooooooooooooooooooooooooooool;........:O0o:,...........'..........................'.             'looooooooooooooooooooooooo
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooc'......;kXK0kc,...,;;;::::::;,.......... .............              ;ooooooooooooooooooooooooo
        oooooooooooooooooooolloooooooooooooooooooooooooooooooool,......lKXXKKOx:,oxxxxxxdxdl;,''''...    .......... .               'loooooooooooooooooooooooo
        ooooooolddlooooollxkdloooooooooooooooooooooooooooooooooc...... .cd0KXXKkOKKKKKKKKK00OOOOkxdc,.  ..........                  .loooooooooooooooooooooooo
        ooooooooxxllooolok0kloooooooooooooooooooooooooooooooool;..... .:xdldOXXXKKXXXKXXXXKXXXXXXXK0Oo,...........                 .;ooooooooooooooooooooooooo
        clodoolokdllolox00xlloooooooooooooooooooooooooooooooooc'.....  ,oxkllOXXKKXXKKKKKXXXXXXXXXXX0d'...........                 ,looooooooooooooooooooooooo
        llokkxodkoclld0KOdlooooooooooooooooooooooooooooooooooo:. ...   ...;ookXXK0xlc;,;;::clodk0KK0o'... ........                ,loooooooooooooooooooooooooo
        ooooxkO0klclx0KOoloooooooooooooooooooooooooooooooooooo;. ...  ;l:,ckOKXXKkc;;,;cllllccclool;.... ..........              .looooooooooooooooooooooooooo
        ooooolok0xoxKXOolooloooooooooooooooooooooooooooooooool'..... 'kXKKKKKXXXXKOkkxoloxkO0KKKOdc'... ....... .'.              ,looooooooooooooooooooooooooo
        oooooloxxk0KKOololoolloooooooooooooooooooooooooooooooc.''....lKXXXXXXXXKXKKKK0l;;'.',;ldxOd,..  .......  ...           ..;oooooooooooooooooooooooooooo
        oooooldxxOKKOxkxlldxocloooooooooooooooooooooooooooooo:.,;....oKXXKK0KXXXXXKKXKOxoc,'.'coldl............   ...          '',oooooooooooooooooooooooooooo
        oooooloxxOK0ocxkdlxkxddxxddddoooooooooooooooooooooooo,.;:...,xKKOxxOKXXXXXXKKXXXXKKOkkk0OOko:,.........     ..        ';.,oooooooooooooooooooooooooooo
        ooooollxx0KOoldxkO0KKK0000Okdlclooooooooooooooooooool;':c'..,kXOod0KXXXXXXXXXXXXXXXXXKXK0KKKK0x;........             ';'.coooooooooooooooooooooooooooo
        ooooocldkKKOO0KK0Okkkxoloooollooooooooooooooooooooool:':l;...dKK0KKXXXXXXXXXXXXXKXXKXX0dd00O0KKd:cclc:'             ....:ooooooooooooooooooooooooooooo
        oooooloxkK0kOK0xocloxxlcoooooooooooooooooooooooooooooc;;lc'..:OXKKKXXXXXXXXXXXXXXXXXXKd.'xd;,cxkodOOOkl.          ....;loooooooooooooooooooooooooooooo
        oooooldOKKOx0KOocoxkkxo:coooooooooooooooooooooooooooooc:cl;. .lKXK000KXXXKXXXXXXKXKKK0dc:;..:ok00ddk0Oxl'       .:llloooollooooooooooooooooooooooooooo
        oooooloOXKkOX0kdx0XXKK0xdoloooooooooooooooooooooooooooolloc.  'xKOlccok0KKXXXXXXX00KK000x;.:kOOKK0xodOOkd:....;ldxxkkxkxxddolloooooooooooooooooooooooo
        oooooloOK00KKOk0KX0OOO00Kkolloooooooooooooooooooooooooooool:. .:OKOdoloxOKXKXXXXKOO0kxdl:,,dKKXXXXXKOkkdodl:cdxkxxkxxxkkkkxxxdoloooooooooooooooooooooo
        oooooolxKKKK00KXKOdxxxxxkOkxolooooooooooooooooooooooooollldko' .oKKKKKKKKKXXXXXX0kOkdddodc:xKKXXKXXXXKK0xddooxxxxxxxxxxkkxxkxxxdlooooooooooooooooooooo
        ooooooookKXKKKXK0doxkxxkxdoollooooooooooooooooooolloooodkO0kxc..,xKXKXXXXXXXXXXKkkkkkO00OdcxKXKKXXXXKKXXKOkxxxdxkxxxkxkkkxkkxkkxdloooooooooooooooooooo
        oooooooolx0KXXXKKOllxxkxkkxlclooooooooooooooooooloxOOkOKKOdodd;..;kKXXXXXXXKKKOkxxkO0OkkkOdxKXXXXXXXXXXXKK0kkxxdxxkxxkkxxxkkkkkkxolooooooooooooooooooo
        oooooooooloOKXXKXKkxkxxxkxkxlcoooooooooooodxkOOxxxxxO0KX0ddxkd,....:loooolcclodxkkkOOkO0OklcxO0KXXXXXXXXXKKK0kkxddxkkxkkkkO00kkxkocooooooooooooooooooo
        oooooooooollxKXXXXXKKOkxxxkxdcloooooooodxO0KXKOocclk0O00xxxxd,  .        .;coxO0K0kOOO0Oo,  .,lOKXXXXXXXXXXXKK0kxdxkOO000KKKOkxkkocloooooooooooooooooo
        ooooooooooolldOKXXXKKXK0kxxkdllooooodxO0KXKXX0xooxO0kooddxxo'           ;dxdxOKXXKkkkxkkl.     ;kKXXXXXXXXXXXXKK0kxk0KXXXXK0kkkxkocloooooooooooooooooo
        ooooooooooooolokKXXXKXXXKOxxxlloooox0KKXXXXXKOkkk0Kkc;,:oxl.        .,;:xK0kk0XXXK0OOxxkxc..   .;xKXXXXXXXXXXXXXKKOxk0KXXXKOkxkxko:coooooooooooooooooo
        ooooooooooooooolxKXXXXXXXKkxdolooox0XXKXXXXXKOkO0KOl;;'.::.   .'  ',ck0OKXKKOOKXXX0kkxkxllll;..',:oOKXXXXXXXXXXXXXK0kk0XXKOkxkxxkdccoooooooooooooooooo
        oooooooooooooooolxKXXXXXXKOxolooooOKXXXXKKK00O0KXOl;;;;;.    ;d;.:dx0XXXXXXX0xOKXX0OO00kclxkd:;;;;;cx0KKXXXXXXXXXXXK0xkKK0kxkkxxkocloooooooooooooooooo
        ooooooooooooooolokKKKXXKKOkxoloold0XXKK0000000KKOc;;;;c;.   ;kkdkKKKXKXXKXXK0odKXXKKKXKkox00kl;:lc;;cx0KXXXXXXXXXKXK0kk0KOkxkkxxklcloooooooooooooooooo
        ooooooooooooooolxKKXXXXKOkkxlcoolkKXXK0OO00000Kkc;;;;;,.  .:xkOKKXKXXKXXXXKKOxOKXXXKK0OOO0Oo:;cxOxo::k000KKKXXXXXXXK0xk00kkkkxxkxc:ooooooooooooooooooo
        oooooooooooooollkKXXXXK0kkxxlcoloOXXXXKK0OO00KKd;;;;;'    :0XKKKKXXXXXXXXKK000KXXXKK0KKK0k;.';:oOOx,.dKKKkkO0KKXXXXKOxk0Okkkkkkkxccooooooooooooooooooo
        ooooooooooooooolxKXKXXKOkxkxlcold0XXXXKXXK000K0o;;;;,.   ;OXXXXXXKXXKXXKXXKKKXXXXXXXXXX0x;..,;;:dOk;.;kKKkxkKKXXXXXKkxO0kkkkkkkkdclooooooooooooooooooo
        ooooooooooooooold0XKKXKOxxkxlcolxKXXKXKKKKXKKKkl;;;;'   .xXXXXXXXXXXXXXXXXXXXXXXXKXXKXX0o;;:;;clokOo..lkOOO0KXXXXXK0xxOOkkxxkxkkocoooooooooooooooooooo
        oooooooooooooooldKXXXX0kxxkxlcooOXXXXXKKK0OO0Kx:;;;;.  .lKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKxdkkodOkok0xc..:d0KKXXXXXX0OxxOkxxxxxxkxlloooooooooooooooooooo
        ooooooooooooooolxKXXXX0kxxxxlclo0XXXXXXXXKOkkkd:,;;,.  :0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXK0xk0000Okdokxl, .oKKXXXXXXKOkxkOkxxkkkkkdlooooooooooooooooooooo
        ooooooooooooooolkKKXXX0kkkxxlclxKXXXXKXKXXKOkxl:;;;'  'kXXXXXXXXXXXXXXXXXXXXXXXXXXXXK0OkxO00KK0Okxddc;.'xXXXXXXXK0kxxkOkkxkkkkxolooooooooooooooooooooo
        ooooooooooooooloOXXXXK0kkxkxl:o0XXXXXXXKXXK0kdldo:,. .lKXXXXXXXXXXXXXXXXXXXXXXXXXXXX0kdook0KXXXK0Okxdc;l0XKXXXXX0kkxxkOxxxxxkOo:cloooooooooooooooooooo
        oooooooooooooold0XXXXK0kxkkxccOKXXXXXXXKXXK0kdllc,.  ,kKXXXXXXXXXXXXXXXXXXXXXXXXXXKXKkl,':lodOKKK0OO0kokKXXXKKXKOkkxolc::;::cl,...',cloooooooooooooooo
        oooooooooooooolxKXKXXK0kxxxxldKXXXXXXXXXXXK0kxddc.  .oKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKOxl;;;:oO000K000kkKXXXXXXKOkxkxl,'''''''''''..  .;coooooooooooooo
        oooooooooooooolkXXXXXKOkxxkxdkKXXXXXXXXXXXKOkxdo;. .cOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0xkkl:lk000000Okx0XXKKXXK0kxxkxc......... ..      .':looooooooooo
        oooooooooooooloOXXXXXKOxkxxxlcodkkO0KXKKKK0kxxxl, .l0KKXXXXXXXXXXXXXXXXXKXXXXXXXXXXXXKkk0x;cO0000OkolxKXXXXXK0kkkkkxc',,,,','..           'coooooooooo
        oooooooooooooldKXKXXXKkxkxxko;',,;;:lkKXK0kxkkd:,'l0XXKXXXXXXXXXXXXXXXXXXXXKXXXXXXXXXXOkOc'l0000xl:;oKXXXXXXKOxxkxkd:,,,,'....'..          .:ooooooooo
        ooooooooooooocxKXXXXK0kxxxkkd;',,,,,,,ckklok0kl;;;o0XXXXXXXXXXXXXXXXXXXXKK0KKXXXKXXXXX0Od,:O0000x:,:kXXXXXXKOkxkkkkd:,,,,,,'.  ..           .;looooooo
        oooooooooooollOXXXXXKOkxxxxkxc''.....''','.:x0Oo:;ckKXXXXXXXXXXXXXXXXXXXKOdld0XXXXXXXX0k:,d000Oxl;,oKXXXXXKOkxkxxxkd:'''.....                 .:oooooo
        ooooooooooooco0XXXXXKOkxxxxxko;,'...  .  ';..lkOxc;lOXXXXXXXKXXXXXXXXXXXXKxocxKXXXXKXXKd':O00Oo;,,:OXKXXXK0kxxkxkkkx:'''.......                .,loooo
        ooooooooooolcxKXKKXX0kxxxxkkkxc,,,,..     ....,dOOdclOXXXXXXXKKXXXXXXXXXXKOxdkKXXXXXXXKl.:O0Od;,',dKXXXXXKOkxxkkkxxxc'.........                  .cooo
        ooooooooooollOXXXXXX0kkxxxkkxko,..',.       :l'.:xOkookKXXXXXXXXXXXXXXXXXKkoxKXXXXXXXXKl.l00d:,..,OXXXKXKOkkkkxxkkkxc'...        ..               .:oo
        oooooooooooco0XKXXXK0kxxkkxxxxx;   .'.     ,kOo;..;dkxodOKKXXKXXXXXXXXXXKOxk0XXXKXXXXKO:;k0x:,.  lKXKXXX0kkxkxxxkkkko;,,,'..       .               .co
        ooooooooooolxKXXXXXK0kkxkkxxkxko.  ....    c0KKOd:'.,cddoxOKXXXXXXXXXKK0OxOKKXXXXXXX0d:ck0x:,'. .xXKXKXK0kkxkxxxkkkkd;'',,,,..      ..              ,l
        oooooooooollkXXKXXXK0kkkxxxxxkkxl'.....   .lKNNNX0ko:'';codkOO0000000OOkxk0XXXXXXX0x:;dOKOc,,.  ;0XKXXXKOkxxkkxxxxkkxc...',,,,..     ..           .,co
        ooooooooooloOXXXXXXK0kkkxxxkkxxkdc,'. .   .lKNWWWNXK0koc;,;:codxxkkkxkkxcckKKXXX0d:;ck0KKo,,,. .lKXXXXXKOxxxkkkxxxxkko;'....,,,'.      ..       .,cooo
        ooooooooooloOXXXXXXK0kkxxxkkxxxxxo'..      :0XNWWNNX0000Okdlcc:;,:lddl;. .lkkkxdlcdO0000d;,,'. 'xXXXXXX0kxkxxxkkkkxxkx:,,'...',,,.      .     .'cooooo
        oooooooooolckXXXXXXX0kkkxxkkxxxxkx;        .lOKXXXXK0000000000Oxl;'''. .',cooodxO000000d;,,,'..;kXKXXXK0kxkkxxxkkxxxxxl,.','.',,,'.     ..  .'cloooooo
        oooooooooo:'lKXXXXXXKOxkkxxxxxxkkxc.        .cdO00000000000000000kc,,,'';;coxO00000000x:,,,,...;kXXXXKK0kxxkkxxxxxkxxkdc,..''..','.     .';clooooooooo
        oooooooool;':OXXXXXXK0kxxxxxxxxkxko'         .,cdk00000000000000Okl,...',;codxxxxddooo:,,,,,'..'xXXKKXX0kxkkkkkxxxkxxkxod:...'....     .,clooooooooooo
        ooooooooc;,,,oKXXXKXXKOkxxxkxxxxxkdo;.        .';:loddddddddooolc:;;,....;dxlcxxdolloc,,,,,,''..oKXXKXK0kxkxxxxxxxkkxkdod;   ..      .,clooooooooooooo
        oooooooc,,,,.'dKXXKXXK0kxxxxxkkxxxddxc.      ....',;;;;;;;;;;;;;;;;;;,'.'cc,.,okOO00k:,,,,,'''. ;OXXXXXKOxkxxxxxkxkxxxxxd'          .coooooooooooooooo
        ooooool;,,'.  .xKXKKXXKOkxxxkxxxxxdxkxl.     ...  .';;;;;;;;;;;;;;;;;;;:c;...;ccooodc,,,,,,..'. .lKXXKXKOkxxxkxxkxxxkkxxl.          .:oooooooooooooooo
        ooooool;,,.    .dKXXXXXKOxkxxkkxxxxxkko.     .'.   ';;;;;;,,,,',,,;;;:cl;. ..;;;;cc:,,,,,,,....  .dKKKXK0kxkkkkxxxxxxxkd,           .:oooooooooooooooo
        ooooooo:,,.     .l0XXXXKKOkkxkxxkxkkkx;       .'...,;;;;;;;,,,,,,,;;clc,.',....,;;;,',,,,,'. ...  .oO0KK0kxkxxkxxxxxxkd,           .;loooooooooooooooo
        oooooool;,,.      ,xKXXXXK0kxkkkkxkkxc.       .''..,,;,,,,;;;;;;;;:cc:'.;dxxl'  .',',,,,,'.   ...  .cxkOkkxkkxxxkxxkxl'           .:oooooooooooooooooo
        oooooooo:','.      'xKXXKXKOkkkkkkkxl.         .,'''',;;;;;;;;;;;:lc;'.,dkkkko'  .',,,,,,.     .'.  .cxkkxxkxxxxxkkxl.            .:oooooooooooooooooo
        
        
        `;
		const art4 = `
        .   ..          .'',;,'''''''.                                                       .......                                                      
        .  ..            .',;,.........                                                            ....                                                    
          ...             .,,'...                                                         ..         ...                                                   
         ....              .......                                                       ..            ..                                                  
         .. ..                                                                          ..              .                                                  
         ..  ..                                                                         .                                                                  
          ....                   .                                                                     ..                                                  
           ..               ...   .                                                                    ..                                                  
           .                  .....                                                                    .                                                   
                               .....                                                                                                                       
          .     ..              ....                                                       ...................                                             
          ..    ..               ...                                                ....                        ..                                         
           ...  ...               ..                                          .....        ...                     ..                                      
             ......                                                        ...         .......             ....      ..                                    
              ......                                                   ...           ..'.. .                 ...       ..                                  
                .....                                                ..            .''.   ..   .              ...        .                                 
                 ....                                             ..             .''.    ...  .                 ..        ..                               
                  ....    .                                     ..      .      .''...         .  ..     .       .'.         .                              
                   ...    ..                                  .       ..      .,,. ..     ..  .  ... .  ..   ..  .'          ..                            
                   ...   ....                               ..  ..   .       .,'.      . .'.     .'.... .'.      .'.     .    ..                           
                    ...  .. .                             ..   ..   ..      .;,.      .. .'.     .'..'. .'.       ..     .   ...                           
                    ...  .. ..                           ..                .,;.      .'...,.     .'..,'. .,.      ..      .   ...                          
                     ...  .  ..                        ...               ..';'     .',,..',.     .'.',,. .,,.     .'.           ..                         
                     .... ..  .                       ...               ...,;.    .',,;..',,.    .,;,,,,..,,,..   .'.           ...                        
                      ... ..  ..                     ..       .         . .,'. ..,;;;;;;,;:;.   .';::;;;,',;;,,.   ..            ..                        
                      .. ....  .             .      ..       ..           .,'..,,,,,;;;;:;,,.   .;;;,;;;;;;,,,,,...'.            ..                        
                       . ....  ..                   .  .                 ..;;,'''',,;;;;;;,,,. .;;'',,,,,,,''''',,,,.            ...                       
                        ...... ..                 ...     .              .',,'''.''',,'.';;,,,,;,. .,'....'',,,,,,,,.            ...                       
                         ....  ...                 ..    .              ..,,,,,,,'''''..',;,,;:;.  .,,'''''''''',,,,'.         . ....                      
                          .... ...                ...    .              .',,,'''.'...............  ......'''''''',;;.         .......                      
                           .   ...                ....  ..             ...','.......                     .......',;'         .,... ...                     
                            .   .'.               . ... ..     .       .,..........                              ..        .',,...  ...                    
                             .  .'.                 ... ....   ..      .,...........                                    ...'.''...    ..                   
                              .. ..                  ..  ..   .....    .,.  ....                               .   ....'''. .,,. .      ...                
                               .....                ...   .   .......  .,,.                                       .,,'''..  .,,. ..                        
                                ....                ...     ..   .. .'..,;.                   ..                 .,;'''.   .'''. ..                        
                                 ....               ...      ... .. .''',;;.                   .                .';,'..    .'''. ..                        
                                  ...               ....      .  ..  .''',;'.                                  .';,..     .''''. ..                        
                                   ...              ....        ...  .,'',,,''.                               .,;,.      .,''''.. ..                       
                                    ...             ....         ..  .'''',;,''...                          .',,.       .,,''''.  ..                       
                                    ...             ....          .  .'''',;,''''''..                    ..,,;'.        .,,,'''.  ..                       
                                     ...            .....            .'''',;,''''',,,...              ..,;;,'.         .'',,'''.   ..                      
                                      ...           .....            .'''',;,''''',,''',,'..   ......',,,;,'.         .''',,'''.   ..                      
                                      ....          .....           .',''',,'',,,,,''''',;,,''',,,,,,,,,;;'.         .'''',;,'.     .                      
                                       . .          .....           .,;,'''...',,,'''''',;,,,,,,,,,,,,,,;'.          .'''',,'.      .                      
                                        . .         ......          .,,'','.   ....''','',,,,,,,,,,,,,,,.           .'''',;,..      ..                     
                                        .  ..       .... ..        .''''''.       .......',,,,,,,,,,,,,.            .''',,,.                               
                                         .   ..     . .....       .''''''.        ...   .,,,,,,,,,,,,,'             .,,,,'.        .                       
                                          .   ..    . .....       .'''''..        .     .,,,,,,,,,,,,'.             ','..          ..                      
                                           .   ..   . ... .      .''''''.       ....    .,,,,,,,,,'..               ..         ... ..                      
                                            ..  .......   ...    .'''''.        .....   .'',,,,,,,.                ..     .....''. ..                      
                                            ...  .....    ..    .'''''.        .... ...  ...','.....        ..  ..........'''''''. . .                     
                                               ......    ..     .''''.         . .. ......   ..  ....           ......      .........                      
                                                ....     .      .'''.          ........ ..    .    ...         .. ...                .  .....              
                                              .. ...    ..      .''.          ........   ..         ...        .....                   ..  ..              
                                                  ..   ..       .,'.         . .........            ....       ..''.                   ......              
                                                   .   .        .,.            .........     .       ....  .....'','.              ..   ...','.            
                                                    .  .        .'.         ........ ...   ...       ....... ..'''''.            ..'.        ...           
                                                    ....        .'.                    ..  ..        ...    .''''''''.          .',,.  .....               
                                                     ..         .'.                   ....  ...  .         .''....'''.          .,,.      ...              
                                                     ..         .'.                   ....   ..            .,.   .'''..      .. .;;. ...                   
                                                      .         ...                   ....   ....      .  .'.    .''''.      ....';...'...                 
                                                                 ..                  .....             .  ..     .'''.        .........           .        
                                                                 ..         .       .    .. ..           ...      .''.        ..  ...''''...      ..       
     
        
        `;
		console.log(art2);
	}
}
