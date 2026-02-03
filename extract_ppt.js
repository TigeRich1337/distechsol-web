import officeParser from 'officeparser';

const filePath = './Distechsol LLC Presentation.pptx';

officeParser.parseOfficeAsync(filePath, (data, err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
