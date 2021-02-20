
export class ReportsModel {
    interpriseId = "";
    interpriseName= "";
    whatsAppNo= "";
    template= "";
    duration= "";
    notification= {}
    conversations= {}

    constructor(obj){
    this.interpriseId = obj.interpriseId ;
    this.interpriseName= obj.interpriseName;
    this.whatsAppNo= obj.whatsAppNo;
    this.template= obj.template;
    this.duration= obj.duration;
    this.notification= new Notification(obj.notification);
    this.conversations= new Conversations(obj.conversations)
    }
}

export class Notification {

    submitted= "";
    read= "";
    uniqueUser= ""
        
    constructor(obj){
        this.submitted= obj.submitted
        this.read= obj.read
        this.uniqueUser= obj.uniqueUser
    }
}

export class Conversations {

    requests= "";
    responsive= "";
    uniqueUser= "";
        
    constructor(obj){
        this.requests= obj.requests;
        this.responsive= obj.responsive;
        this.uniqueUser= obj.uniqueUser;
    }
}
