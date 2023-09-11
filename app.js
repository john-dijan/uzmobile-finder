/*async function funksiya(a) {
    let tick;
    let inp = document.getElementsByTagName('input')[0];
    await fetch('csvjson.json')
        .then(data => data.json())
        .then(json => {
            // console.table(
            //     json.filter(item=>item.operator == 'Бекзод Сабиров')
            // );
            json.filter(item => item.number == inp.value).map(item => tick = item);
        });
    if (tick == undefined || tick == null) {
        alert('Data not found');
    } else {
        console.table(tick);
        let { num, standard, region, dateOfRegister, fio, id, number, clientType, icc, tariff, balance, numberPrice, numberCategory, branch, branchOfBranch, operator, currentlyStatus, dateOfBirth, pasportData, givenIssue, personalID } = tick;
        document.getElementById('num').innerHTML = num;
        document.getElementById('fio').innerHTML = fio;
        document.getElementById('dob').innerHTML = dateOfBirth;
        document.getElementById('passport').innerHTML = pasportData;
        document.getElementById('number').innerHTML = number;
        document.getElementById('contract').innerHTML = dateOfRegister;
        document.getElementById('ICC').innerHTML = icc;
        document.getElementById('balance').innerHTML = balance;
        document.getElementById('id').innerHTML = id;
        document.getElementById('clientType').innerHTML = clientType;
        document.getElementById('region').innerHTML = region;
        document.getElementById('standard').innerHTML = standard;
        document.getElementById('status').innerHTML = currentlyStatus;
        document.getElementById('fio').innerHTML = fio;
        document.getElementById('tariff').innerHTML = tariff;
        document.getElementById('dealer').innerHTML = branch;
        document.getElementById('branch').innerHTML = branchOfBranch;
        document.getElementById('numCat').innerHTML = numberCategory;
        document.getElementById('numPr').innerHTML = numberPrice;
        document.getElementById('pinfl').innerHTML = personalID;
        document.getElementById('givenBy').innerHTML = givenIssue;
        document.getElementById('operator').innerHTML = operator;
    }
}*/

// let a = fetch('csvjson.json')
//     .then(data=>data.json())
//     .then(json=> console.log(json))

// let getData = async () => {
//     const res = await fetch('csvjson.json');
//     const data = await res.json();
//     return data;
// };

// console.log(getData())

// const displayUsers = async () => {
//     const payload = await getData();

// let dataDisplay = payload.map((object) => {
//     const { balance, branch, branchOfBrach, clientType, currentlyStatus, dateOfBirth, dateOfRegister, fio, givenIssue, icc, id, num, number, numberCategory, numberPrice, operator, pasportData, personalID, region, standard, tariff  } = object;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('fio').innerHTML = fio;
//     document.getElementById('dob').innerHTML = dateOfBirth;
//     document.getElementById('passport').innerHTML = pasportData;
//     document.getElementById('number').innerHTML = number;
//     document.getElementById('contract').innerHTML = dateOfRegister;
//     document.getElementById('ICC').innerHTML = icc;
//     document.getElementById('id').innerHTML = id;
//     document.getElementById('clientType').innerHTML = clientType;
//     document.getElementById('region').innerHTML = region;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num;
//     document.getElementById('num').innerHTML = num; 
// })
// }




let deta;
const getData = async () => {
    const res = await fetch('csvjson.json');
    const data = await res.json();
    deta = data;
    return deta;
}
getData();

setTimeout(()=>{
    document.querySelector('.loading').style.display = 'none';
}, 7000);

async function funksiya() {
    const payload = await deta;
    let inp = document.getElementsByTagName('input')[0];
    let jack = payload.filter(item => item.number == inp.value).map(item => item);
    console.table(jack);
    console.log(jack.length)
    if (jack.length > 0) {
        document.querySelector('.loading').style.display = 'grid';
        setTimeout(()=>{
            document.querySelector('.loading').style.display = 'none';
        }, 1300);
        let [{ num, standard, region, dateOfRegister, fio, id, number, clientType, icc, tariff, balance, numberPrice, numberCategory, branch, branchOfBranch, operator, currentlyStatus, dateOfBirth, pasportData, givenIssue, personalID }] = jack;
        document.getElementById('num').innerHTML = num;
        document.getElementById('fio').innerHTML = fio;
        document.getElementById('dob').innerHTML = dateOfBirth;
        document.getElementById('passport').innerHTML = pasportData;
        document.getElementById('number').innerHTML = number;
        document.getElementById('contract').innerHTML = dateOfRegister;
        document.getElementById('ICC').innerHTML = icc;
        document.getElementById('balance').innerHTML = balance;
        document.getElementById('id').innerHTML = id;
        document.getElementById('clientType').innerHTML = clientType;
        document.getElementById('region').innerHTML = region;
        document.getElementById('standard').innerHTML = standard;
        document.getElementById('status').innerHTML = currentlyStatus;
        document.getElementById('fio').innerHTML = fio;
        document.getElementById('tariff').innerHTML = tariff;
        document.getElementById('dealer').innerHTML = branch;
        document.getElementById('branch').innerHTML = branchOfBranch;
        document.getElementById('numCat').innerHTML = numberCategory;
        document.getElementById('numPr').innerHTML = numberPrice;
        document.getElementById('pinfl').innerHTML = personalID;
        document.getElementById('givenBy').innerHTML = givenIssue;
        document.getElementById('operator').innerHTML = operator;
    } else {
        alert('Data not found');
    }
}