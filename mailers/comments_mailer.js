const nodeMailer = require('../config/nodemailer');

// this is another way of exporting comments
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comment/new_comment.ejs');
    // console.log('inside newComment mailer', comment);

    nodeMailer.trasnporter.sendMail({
        from: 'bkunal455@gmail.com',
        to: comment.user.email,
        subject: "New comment published!",
        html: htmlString,    
    }, (err, info) => {
        if(err){
            console.log('error in sending mail' , err);
            return;
        }
        console.log('Mail delivered', info);
        return;
    })
}