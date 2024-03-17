

interface IContact {
   phone: string | number,
   name: string,
   age: number,
   userName: string,
   mail: string,
   family: boolean,
}

class TelephoneDirectory {
   private store: IContact[]

   constructor()
   constructor(store: IContact[])
   constructor(store?: IContact[]){
      if(Array.isArray(store)){
         this.store = store 
      } else {
         this.store = []
      }
   }

   public findContactByName(contactName: string): undefined | IContact | IContact[] {
      return this.store.find(contact => contact.name === contactName)
   }

   public findContactByPhone(contactPhone: number | string): undefined | IContact | IContact[] {
      return this.store.find(contact => contact.phone === contactPhone)
   }

   public addContact(newContact: IContact): void {
      this.store.push(newContact)
   }

   public deleteContact(deletedСontactName: string): void {
      const deletedСontact = this.findContactByName(deletedСontactName)
      if(typeof deletedСontact !== 'undefined' && Array.isArray(deletedСontact) !== true){
         const indexOfDeletedContact = this.store.indexOf(deletedСontact)
         if (indexOfDeletedContact !== -1) {
            this.store.splice(indexOfDeletedContact, 1);
         }
      }else {
         console.log('Contact is not defined');    
      }
   }

   public showContact(): IContact[] | []{
      return this.store
   }
}


const contacts: IContact[] = [
   {
       phone: "1234567890",
       name: "John Doe",
       age: 30,
       userName: "johndoe",
       mail: "john.doe@example.com",
       family: true
   },
   {
       phone: "0987654321",
       name: "Jane Smith",
       age: 25,
       userName: "janesmith",
       mail: "jane.smith@example.com",
       family: false
   },
   {
       phone: "5555555555",
       name: "Alice Johnson",
       age: 40,
       userName: "alicej",
       mail: "alice.johnson@example.com",
       family: true
   },
   {
       phone: "7777777777",
       name: "Bob Brown",
       age: 35,
       userName: "bobbrown",
       mail: "bob.brown@example.com",
       family: true
   },
   {
       phone: "9999999999",
       name: "Emily Davis",
       age: 28,
       userName: "emilyd",
       mail: "emily.davis@example.com",
       family: false
   },
   {
       phone: "6666666666",
       name: "Michael Wilson",
       age: 45,
       userName: "michaelw",
       mail: "michael.wilson@example.com",
       family: true
   },
   {
       phone: "2222222222",
       name: "Samantha Martinez",
       age: 32,
       userName: "samantham",
       mail: "samantha.martinez@example.com",
       family: false
   },
   {
       phone: "4444444444",
       name: "David Lee",
       age: 38,
       userName: "davidl",
       mail: "david.lee@example.com",
       family: true
   },
   {
       phone: "3333333333",
       name: "Jessica Taylor",
       age: 29,
       userName: "jessicat",
       mail: "jessica.taylor@example.com",
       family: false
   },
   {
       phone: "8888888888",
       name: "Matthew Anderson",
       age: 42,
       userName: "matthewa",
       mail: "matthew.anderson@example.com",
       family: true
   }
];
const contactStore = new TelephoneDirectory(contacts)

console.log(contactStore.showContact());

contactStore.deleteContact('Matthew Anderson')

console.log(contactStore.showContact());

