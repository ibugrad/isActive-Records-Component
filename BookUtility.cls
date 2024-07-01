iweiwfeiiefjigieirjfepowekfpsidfiopublic class BookUtility {

    @AuraEnabled(cacheable=True)
    public static List<Book__c> amountOfBooks(){
        return [SELECT Id, Total_Number_of_Books__c, Name__c, Author__c FROM Book__c WHERE isActive__c=True];
    }
        
}
