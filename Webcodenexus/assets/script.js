let user = {
   firstName: '',
   companyName: '',
   designation: '',
   address: '',
   adharNumber: '',
   number: '',
   floorNumber: '',
   cabinNumber: '',
   startDate: '',
   stambPapper: '',
   currentDate: '',
   pinnumber: '',
   district: '',
   postoffice: '',
}

document.getElementById('print').addEventListener('click', printt)
function printt() {
   user.firstName = document.getElementById('firstname').value
   user.companyName = document.getElementById('Companyname').value
   user.designation = document.getElementById('designation').value
   user.address = document.getElementById('address').value
   user.adharNumber = document.getElementById('Adharnumber').value
   user.number = document.getElementById('number').value
   user.pinnumber = document.getElementById('pinnumber').value
   user.district = document.getElementById('district').value
   user.postoffice = document.getElementById('postoffice').value
   user.floorNumber = document.getElementById('floornumber').value
   user.roomNumber = document.getElementById('roomnumber').value
   user.cabinNumber = document.getElementById('cabinnumber').value
   user.startDate = document.getElementById('date').value
   user.stambPapper = document.getElementById('stamb').value

   //client-side Validation
   let nameError=document.getElementById('nameerror')
   let companyError=document.getElementById('companyerror')
   let desigError=document.getElementById('desigerror')
   let addressError=document.getElementById('addresserror')
   let adharError=document.getElementById('adharerror')
   let numberError=document.getElementById('numbererror')
   let pinError=document.getElementById('pinerror')
   let districtError=document.getElementById('districterror')
   let postError=document.getElementById('posterror')
   let roomError=document.getElementById('roomerror')
   let cabinError=document.getElementById('cabinerror')
   let dateError=document.getElementById('dateerror')

   nameError.textContent='';
   addressError.textContent='';
   postError.textContent='';
   districtError.textContent='';
   pinError.textContent='';
   adharError.textContent='';
   numberError.textContent='';
   companyError.textContent='';
   desigError.textContent='';
   roomError.textContent='';
   cabinError.textContent='';
   dateError.textContent='';


   if(!/^[a-zA-Z\s.]+$/.test(user.firstName)){
      nameError.textContent='*';
      Submit.preventDefualt();
    }else if(!/^[a-zA-Z\s.,/]+$/.test(user.address)){
      addressError.textContent='*';
      Submit.preventDefualt();
    }else if(!/^[a-zA-Z\s]+$/.test(user.postoffice)){
      postError.textContent='*';
      Submit.preventDefualt();
    }else if(!/^[a-zA-Z\s]+$/.test(user.district)){
      districtError.textContent='*';
      Submit.preventDefualt();
    }else if( !/^\d{6}$/.test(user.pinnumber)){
      pinError.textContent="*";
      submit.preventDefault();
    }else if( !/^\d+$/.test(user.number)){
      numberError.textContent="*";
      submit.preventDefault();
    }else if(!/^\d{4}[-\s]\d{4}[-\s]\d{4}$/.test(user.adharNumber)){
      adharError.textContent="*";
      submit.preventDefault();
    }else if(!/^[a-zA-Z0-9\s.,]+$/.test(user.companyName)){
      companyError.textContent='*';
      Submit.preventDefualt();
    }else if(!/^[a-zA-Z\s.,]+$/.test(user.designation)){
      desigError.textContent='*';
      Submit.preventDefualt();
    }else if(!/^[a-zA-Z0-9\s,./_-]+$/.test(user.roomNumber)){
      roomError.textContent='*';
      Submit.preventDefualt();
     }else if(!/^[a-zA-Z0-9\s,./_-]+$/.test(user.cabinNumber)){
      cabinError.textContent='*';
      Submit.preventDefualt();
    }else if(user.startDate===''){
      dateError.textContent='*';
      Submit.preventDefualt();
    }
 
   if (user.floorNumber === '1') {
      user.floor = '1st'
   }
   else {
      user.floor = '2nd'
   }

   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   const userDateInput = document.getElementById('date').value;
   const inputDate = new Date(userDateInput);

   function getOrdinalSuffix(number) {

     switch(number){
      case 1:
      case 21:
      case 31:
         return 'st';
      case 2:
      case 22:
         return 'nd';
      case 3:
      case 23:
         return 'rd';
      default:
         return 'th';
     }
   }
   const day = inputDate.getDate();
   const month = monthNames[inputDate.getMonth()];
   const year = inputDate.getFullYear();

   const dayWithSuffix = day + getOrdinalSuffix(day);

   const formattedDate = `${dayWithSuffix} ${month} ${year}`;
   user.startDate = formattedDate;

   const owner = {
      ownerName: 'T.Saidalavi (Designated Partner)',
      buildingName: 'For Platinum Workspace LLP'
   }

   const stambValue = document.getElementById('stamb').value;
   let headerSecond;
   let contentSecond;
   let headerThird;
   let contentThird;
   let headerFour;
   let contentFour;
   let agreementsecond;
   let agreementthird;
   let agreementfinal;
   let agreementfour;

   if (stambValue == '1') {
      headerSecond = 100;
      contentSecond = 800;
      headerThird = 100;
      contentThird = 800;
      headerFour = 100;
      contentFour = 800;
   } if (stambValue == '2') {
      headerSecond = 500;
      contentSecond = 400;
      headerThird = 100;
      contentThird = 800;
      headerFour = 100;
      contentFour = 800;
   } else if (stambValue == '3') {
      headerSecond = 500;
      contentSecond = 400;
      headerThird = 500;
      contentThird = 400;
      headerFour = 100;
      contentFour = 800;
   } else if (stambValue == '4') {
      headerSecond = 500;
      contentSecond = 400;
      headerThird = 500;
      contentThird = 400;
      headerFour = 500;
      contentFour = 400;
   } else if (stambValue == '') {
      headerSecond = 100;
      contentSecond = 800;
      headerThird = 100;
      contentThird = 800;
      headerFour = 100;
      contentFour = 800;
   }

   let secthird =   `<div style="height:800px; width:100%;  padding:30px 60px 0px 60px; text-align: justify;">
                     That the expression of term, Lessor/Owner and the Lessee/Tenant Shall mean and include their legal heirs successors, assigns, representatives etc. Whereas the Lessor/Owner is the owner in possession and enjoyment of the Building No. 14/104-Q, 2nd FLOOR, PLATINUM WORKSPACE, SAHARA CENTRE, OPPOSITE POLLY QUARTERS CALICUT ROAD,PERINTHALMANNA, ANGADIPPURAM, KERALA, INDIA, 679321 In and
                     has agreed to let out the below mentioned portion <span style="font-weight:600;">WS Allotment No. WS ${user.cabinNumber}, ${user.roomNumber},  ${user.floor} FLOOR, PLATINUM WORKSPACE, SAHARA CENTRE, OPPOSITE POLLY QUARTERS CALICUT ROAD, PERINTHALMANNA, ANGADIPPURAM,  KERALA,  INDIA, 679321</span> for a period of 11 months from  
                     ${user.startDate} for a yearly rent of INR Rs. 10,500/- (<span style="font-weight:600;">Ten Thousand Five Hundred Only</span>)<br><br><span style="font-weight:600; font-size:18px;">NOW THIS RENT AGREEMENT WITNESS AS UNDER:-</span><br>  
                     1)The Tenant/Lessee shall pay the yearly rent of INR<span style="font-weight:600;"> 10,500/- (Ten Thousand Five Hundred Only)</span> on before  ${dayWithSuffix} day of every <span style="font-weight:600;">${monthNames[inputDate.getMonth() - 1]}</span> without fail, 
                     excluding electricity and water charges. If the Lessee is not renewing on the above date, Address can be cancelled or transferred on before  ${dayWithSuffix} ${monthNames[inputDate.getMonth() - 1]} ${inputDate.getFullYear() + 1} .</li>
                     <ol> <li>The Client has paid the rent of Rs 10,500 in advance.</li> <li>The Client submitted the following: <ol type="i"> <li>Copy of Identity Proof such as Aadhaar Card, Voters ID</li> <li>Signed copy of Service Level Agreement</li>
                     </ol> </li> <li>The Client is allowed to use one 'Desk Space' for four hours in each month of this agreement term, on prior booked time on any day between 10 am and 6 pm Monday to Friday.</li>
                     <li>Platinum Workspace will receive all mail at this address of the Client without prejudice to all the rights of Platinum Workspace.</li> </ol></div>`

   let thirdfourth = `<div style="height:800px; width:100%;  padding:30px 60px 0px 60px; text-align: justify;"><span style="font-weight:600; font-size:18px;">NOW THIS RENT AGREEMENT WITNESS AS UNDER:-</span><br>  
                     1)That the Tenant/Lessee shall pay the yearly rent of INR<span style="font-weight:600;"> 10,500/- (Ten Thousand Five Hundred Only)</span> on before  ${dayWithSuffix} day of every <span style="font-weight:600;">${monthNames[inputDate.getMonth() - 1]}</span> without fail, 
                     excluding electricity and water charges. If the Lessee is not renewing on the above date, Address can be cancelled or transferred on before  ${dayWithSuffix} ${monthNames[inputDate.getMonth() - 1]} ${inputDate.getFullYear() + 1} .</li>
                     <ol> <li>That, The Client has paid the rent of Rs 10,500 in advance.</li> <li>That, The Client submitted the following: <ol type="i"> <li>Copy of Identity Proof such as Aadhaar Card, Voters ID</li> <li>Signed copy of Service Level Agreement</li>
                     </ol> </li> <li>That the Client is allowed to use of one 'Desk Space' for four hours in each month of this agreement term, on prior booked time on any day between 10 am and 6 pm Monday to Friday.</li>
                     <li>Platinum Workspace will receive all mail at this address of the Client without prejudice to all the rights of Platinum Workspace.</li> <li>That, the Platinum Workspace will display the name board of the Client in the premise as per Companies Act, 2013, with Company registration number (if any) in the prescribed format. Client will pay necessary fees to Platinum Workspace to make the name board.</li>
                     <li>That if the Client applies and obtains Company registration at this address, Platinum Workspace will display the Company registration Certificate of the Client in the premise. The Client has to provide the Company registration Certificate to Platinum Workspace immediately after receiving it.</li>
                     <li>That if the Client applies for and obtains Company registration at this address, the Client has agreed to keep and maintain the premise, a true and correct account as per provisions of the Company registration Act, including but not limited to the following:
                     <ol type="a" start="a"> <li>Production or manufacture of goods;</li> <li>Inward and outward supply of goods or services or both;</li> <li>Stock of goods;</li> <li>Input tax credit availed;	output tax payable and paid<br></li>
                     <li> such other particulars as may be prescribed</li> </ol> </li> </ol></div>`

   let fourthfifth=`<div style="height:800px; width:100%; padding:30px 60px 0px 60px; text-align: justify;">
                     <ol start="5"> <li>That, the Platinum Workspace will display the name board of the Client in the premise as per Companies Act, 2013. with Company registration number (if any) in the prescribed format. Client will pay necessary fees to Platinum Workspace to make the name board.</li>
                     <li>That if the Client applies and obtains Company registration at this address, Platinum Workspace will display the Company registration Certificate of the Client in the premise. The Client has to provide the Company registration Certificate to Platinum Workspace immediately after receiving it.</li>
                     <li>That if the Client applies for and obtains Company registration at this address, the Client has agreed to keep and maintain the premise, a true and correct account as per provisions of the Company registration Act, including but not limited to the following:
                     <ol type="a" start="a"> <li>Production or manufacture of goods;</li> <li>Inward and outward supply of goods or services or both;</li> <li>Stock of goods;</li> <li>Input tax credit availed;	output tax payable and paid<br></li>
                     <li> such other particulars as may be prescribed</li> </ol> <li>That, the arrangements may be terminated by Platinum Workspace without notice to any, in case the Client violates any terms or is doing illegal business.</li>
                     <li>That, on expiry or termination of this agreement, the Client has agreed to change the addresses of all Government Registration & Licenses that the Client has taken in the premise, within 10 calendar days.</li> </ol> </li> </ol> </div>`

   let fithonetwo=`<div style="height:800px; width:100%;  padding:10px 60px 0px 60px; text-align: justify;">
                     <ol start="8"> <li>That, the arrangements may be terminated by Platinum Workspace without notice to any, in case the Client violates any terms or is doing illegal business.</li>
                     <li>That, on expiry or termination of this agreement, the Client has agreed to change the addresses of all Government Registration & Licenses that the Client has taken in the premise, within 10 calendar days.</li> <li>In case the Client has not renewed the agreement, Platinum Workspace will inform the corresponding department from which registration and/or license has been taken by the Client to cancel the same.</li>
                     <li>This agreement can be renewed for a further period by mutual consent of the Client and the Platinum Workspace, subject to any necessary revision of the terms and conditions.</li> <li>That, in case of any dispute, the decision of the Platinum Workspace shall be final and binding upon the Client. In all matters, the jurisdiction shall be Courts in Perinthalmanna only.</li>
                     </ol> <p>In witness whereof the said Lessor and Lessee have put their respective signatures hereunder.</p> <p>Witness:</p> <p>1.<br><br><br></p> <p>2.<br><br><br></p></div>`

let secondcontenttwo=`<div style="height:400px;  width:100%;  padding:10px 60px 0px 60px; text-align: justify;">
                      That the expression of term, Lessor/Owner and the Lessee/Tenant Shall mean and include their legal heirs successors, assigns, representatives etc.
                      Whereas the Lessor/Owner is the owner in possession and enjoyment of the Building No. 14/104-Q, 2nd FLOOR, PLATINUM WORKSPACE,
                      SAHARA CENTRE, OPPOSITE POLLY QUARTERS CALICUT ROAD,PERINTHALMANNA, ANGADIPPURAM, KERALA, INDIA, 679321 In and
                      has agreed to let out the below mentioned portion <span style="font-weight:600;">WS Allotment No. WS ${user.cabinNumber}, ${user.roomNumber}, ${user.floor} FLOOR, PLATINUM WORKSPACE, SAHARA
                      CENTRE, OPPOSITE POLLY QUARTERS CALICUT ROAD, PERINTHALMANNA, ANGADIPPURAM,  KERALA,  INDIA, 679321</span> for a period of 11 months from  
                      ${user.startDate} for a yearly rent of INR Rs. 10,500/- (<span style="font-weight:600;">Ten Thousand Five Hundred Only</span>) </div>`

let thirdcontentwo= `<div style="height:400px; width:100%;  padding:10px 60px 0px 60px; text-align: justify;"><span style="font-weight:600; font-size:18px;">NOW THIS RENT AGREEMENT WITNESS AS UNDER:-</span><br>  
                     1) That the Tenant/Lessee shall pay the yearly rent of INR<span style="font-weight:600;"> 10,500/- (Ten Thousand Five Hundred Only)</span> on before  ${dayWithSuffix} day of every <span style="font-weight:600;">${monthNames[inputDate.getMonth() - 1]}</span> without fail, 
                     excluding electricity and water charges. If the Lessee is not renewing on the above date, Address can be cancelled or transferred on before  ${dayWithSuffix} ${monthNames[inputDate.getMonth() - 1]} ${inputDate.getFullYear() + 1} .</li>
                     <ol>
                     <li>The Client has paid the rent of Rs 10,500 in advance.</li>
                     <li>The Client submitted the following:
                     <ol type="i">
                     <li>Copy of Identity Proof such as Aadhaar Card, Voters ID</li>
                     <li>Signed copy of Service Level Agreement</li>
                     </ol>
                     </li>
                     <li> That the Client is allowed to use of one 'Desk Space' for four hours in each month of this agreement term, on prior booked time on any day between 10 am and 6 pm Monday to Friday.</li>
                     <li>Platinum Workspace will receive all mail at this address of the Client without prejudice to all the rights of Platinum Workspace.</li>
                     </ol></div>`

   let fourthtwo=`<div style="height:400px; width:100%;  padding:10px 60px 0px 60px; text-align: justify;">
                     <ol start="5">
                     <li>That, the Platinum Workspace will display the name board of the Client in the premise as per Companies Act, 2013, with Company registration number (if any) in the prescribed format. Client will pay necessary fees to Platinum Workspace to make the name board.</li>
                     <li>That if the Client applies and obtains Company registration at this address, Platinum Workspace will display the Company registration Certificate of the Client in the premise. The Client has to provide the Company registration Certificate to Platinum Workspace immediately after receiving it.</li>
                     <li>That if the Client applies for and obtains Company registration at this address, the Client has agreed to keep and maintain the premise, a true and correct account as per provisions of the Company registration Act, including but not limited to the following:
                     <ol type="a" start="a">
                     <li>Production or manufacture of goods;</li>
                     <li>Inward and outward supply of goods or services or both;</li>
                     <li>Stock of goods;</li>
                     </ol>
                     </li>
                     </ol>
                     </div>`

   let fifthone  =  `<div style="height:800px; width:100%;  padding:10px 60px 0px 60px; text-align: justify;">
                     <ol type="a" start="4">
                     <li>Input tax credit availed;	output tax payable and paid</li>
                     <li> such other particulars as may be prescribed</li>
                     </ol>
                     <ol start="8">
                     <li>That, the arrangements may be terminated by Platinum Workspace without notice to any, in case the Client violates any terms or is doing illegal business.</li>
                     <li>That, on expiry or termination of this agreement, the Client has agreed to change the addresses of all Government Registration & Licenses that the Client has taken in the premise, within 10 calendar days.</li>
                     <li>In case the Client has not renewed the agreement, Platinum Workspace will inform the corresponding department from which registration and/or license has been taken by the Client to cancel the same.</li>
                     <li>This agreement can be renewed for a further period by mutual consent of the Client and the Platinum Workspace, subject to any necessary revision of the terms and conditions.</li>
                     <li>That, in case of any dispute, the decision of the Platinum Workspace shall be final and binding upon the Client. In all matters, the jurisdiction shall be Courts in Perinthalmanna only.</li>
                     </ol>
                     <p>In witness where of the said Lessor and Lessee have put their respective signatures hereunder.</p>
                     <p>Witness:</p>
                     <p>1.<br><br><br></p>
                     <p>2.<br><br><br></p>
                     </div>`

   let fifthtwo  =   `<div style="height:800px; width:100%;  padding:30px 60px 0px 60px; text-align: justify;">
                     <ol start="10">
                     <li>In case the Client has not renewed the agreement, Platinum Workspace will inform the corresponding department from which registration and/or license has been taken by the Client to cancel the same.</li>
                     <li>This agreement can be renewed for a further period by mutual consent of the Client and the Platinum Workspace, subject to any necessary revision of the terms and conditions.</li>
                     <li>That, in case of any dispute, the decision of the Platinum Workspace shall be final and binding upon the Client. In all matters, the jurisdiction shall be Courts in Perinthalmanna only.</li>
                     </ol>
                     <p>In witness where of the said Lessor and Lessee have put their respective signatures hereunder.</p>
                     <p>Witness:</p>
                     <p>1.<br><br><br></p>
                     <p>2.<br><br><br></p>
                     </div>`

const footer =    `<div style="height:190px; width:100%; "></div>`

const signature = `<div style="height:35px; width:100%;  Display:flex;">
                   <div style="font-size:13px; line-height:15px height:35px; width:32%;  padding-left:60px;" >${owner.buildingName}<br>${owner.ownerName}</div>
                   <div style="font-size:13px; line-height:15px height:35px; width:45%;  margin-left:200px;">For ${user.companyName}<br>${user.firstName} (${user.designation})</div></div>`


   if(stambValue=='1'){
       agreementsecond = `<div style="height:${headerSecond}px; width:100%; font-family-Cambria; font-size:15px;"></div>`+ secthird + signature + footer
       agreementthird = `<div style="height:${headerThird}px; width:100%;  font-family-Cambria; font-size:15px;"></div>` + fourthfifth + signature + footer
       agreementfour = `<div style="height:${headerSecond}px; width:100%; font-family-Cambria; font-size:15px;"></div>`+ fifthtwo + signature + footer
       agreementfinal=''
   }else if(stambValue=='2'){
      agreementsecond = `<div style="height:${headerSecond}px; width:100%;  font-family-Cambria; font-size:15px;"></div>`+ secondcontenttwo  + signature + footer
      agreementthird=`<div style="height:${headerThird}px; width:100%;  font-family-Cambria; font-size:15px;"></div>`+ thirdfourth+ signature + footer
      agreementfour=`<div style="height:${headerThird}px; width:100%; font-family-Cambria; font-size:15px;"></div>`+ fithonetwo + signature + footer
      agreementfinal=''
   }else if(stambValue=='3'){
      agreementsecond = `<div style="height:${headerSecond}px; width:100%;  font-family-Cambria; font-size:15px;"></div>`+ secondcontenttwo  + signature + footer
      agreementthird = `<div style="height:${headerThird}px; width:100%;  font-family-Cambria; font-size:15px;"></div>` + thirdcontentwo + signature + footer
      agreementfour=`<div style="height:${headerFour}px; width:100%;  font-family-Cambria; font-size:15px;"></div>` + fourthfifth + signature + footer
      agreementfinal = `<div style="height:${headerFour}px; width:100%;  font-family-Cambria; font-size:15px;"></div>`+ fifthtwo + signature + footer
   }else if(stambValue=='4'){
      agreementsecond = `<div style="height:${headerSecond}px; width:100%; font-family-Cambria; font-size:15px;"></div>`+ secondcontenttwo  + signature + footer
      agreementthird = `<div style="height:${headerThird}px; width:100%; font-family-Cambria; font-size:15px;"></div>` + thirdcontentwo + signature + footer
      agreementfour= `<div style="height:${headerThird}px; width:100%;  font-family-Cambria; font-size:15px;"></div>`+fourthtwo + signature + footer
      agreementfinal = `<div style="height:100px; width:100%; font-family-Cambria; font-size:15px;"></div>`+ fifthone+ signature + footer
   }

  

const noc = `<h3 style="margin-left: 60px;  font-size:21px; font-weight:600; margin-top:210px;" >NO OBJECTION CERTIFICATE FOR THE COMPANY REGISTRATION</h3><br>
         <p style="margin-left: 60px;  font-size:17px; word-spacing: 3px; font-weight:600;"> Sub: - No Objection/Consent for use of address to apply for Company<br> Registration.<br><br>
         ${user.firstName}, ${user.designation} of ${user.companyName}.<br> Address: No ${user.roomNumber} WS Allotment No WS ${user.cabinNumber} ${user.roomNumber} ${user.floor} Floor Sahara<br>Centre, Perinthalmanna, Angadippuram PO,
         Kerala-679321.<br><br> Dear Sir/Madam<br><br> We are the owners of the aforementioned premise we have rented<br>aforementioned premise to Platinum workspace LLP Vide Rent Agreement<br>from Date ${user.startDate} to ${dayWithSuffix} ${monthNames[inputDate.getMonth() - 1]} ${inputDate.getFullYear() + 1}.
         <br><br>We here by declare that we have No Objections Platinum workspace    LLP and<br>its clients using the above premise address to carry out their business,to<br>obtain Company Registration and to receive any correspondence from<br>government Authorities.<br>
         <br>We further allow Platinum Workspace LLP to issue No objection /consent to<br>its clients for purpose of obtain company Registration on behalf of us<br> <br>Thanking you,<br> Name and Signature<br><br>
         <br>For Platinum Workspace LLP<br> T.Saidalavi (Designated partner)</p>`

const agreement =`<div style="height:500px; width:100%;  font-family-Cambria; font-size:15px; box-sizing:"></div>
         <div style="height:400px; width:100%;  padding:10px 60px 0px 60px; text-align: justify;"><h3 style="text-align:center;  font-size:17px; font-weight:600;" >RENT AGREEMENT</h3>
         This Rent Agreement is made on <span style="font-weight:600;"> ${dayWithSuffix} ${monthNames[inputDate.getMonth()]} ${inputDate.getFullYear()} </span>at Perinthalmanna
         by and between PLATINUM WORKSPACE LLP 14/104/Q, 2nd Floor, Sahara Centre, Calicut Road, Angadipuram, Perinthalmanna, Malappuram, Kerala 679321 represented by Designated Partner Mr. T SAIDALAVI, S/O SAIDALI THEKKETHIL HOUSE, CHEMMALASSERI P O, MALAPPURAM, KERALA, 679321 Here in after called 
         the <span style="font-weight:600;">The Lessor/ Owner</span>, Party of the First Party. <h3 style="text-align:center; font-size:17px; font-weight:600; ">AND</h3>
         <span style="font-weight:600;">${user.companyName}</span> through its ${user.designation} ${user.firstName} (Aadhar No:${user.adharNumber}, Mobile No:${user.number})
         ${user.address}, ${user.postoffice} po, ${user.district} dt, pin ${user.pinnumber} Here in after referred to as <span style="font-weight:600;">The Lessee</span> Party of the second party</div>`+ signature + footer
         
   document.title = `Rent Agreement ${user.cabinNumber}`;
         
   document.getElementById('myid').innerHTML = agreement + agreementsecond + agreementthird + agreementfour + agreementfinal + noc;

   var printContents = document.getElementById('myid').innerHTML;
   var originalContents = document.body.innerHTML;
   document.body.innerHTML = printContents;
   window.print();
   document.body.innerHTML = originalContents;
   location.reload();

}