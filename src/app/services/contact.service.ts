import * as angular from 'angular';

export class ContactService {
  private Contact: any;
  private toaster: any;

  private page: number = 1;
  private hasMore: boolean = true;
  private isLoading:boolean = false;
  public isSaving: boolean = false;
  private persons: any[] = [];
  private search: string = "";
  private sorting: string = "name";
  private ordering: string = "ASC";
  public isDeleting: boolean = false;

  constructor(Contact: any, toaster: any) {
    this.Contact = Contact;
    this.toaster = toaster;
    this.loadContacts();
  }

  getPerson(email: any) {
    console.log(email);
    for (let person of this.persons) {
      if (person.email === email) {
        return person;
      }
    }
  }

  doSearch() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  };
  
  doOrder() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  loadContacts() {
    if (this.hasMore && !this.isLoading) {
      this.isLoading = true;

      var params = {
        _page: this.page,
        _sort: this.sorting,
        _order: this.ordering,
        q: this.search
      };

      this.Contact.query(params).then((res: any)=> {

        console.debug(res);
        for (let person of res) {
          this.persons.push(person);
        }

        if (res.length === 0) {
          this.hasMore = false;
        }
        this.isLoading = false;
      })
    }
  }

  loadMore() {
    if (this.hasMore && !this.isLoading) {
      this.page += 1;
      this.loadContacts();
    }
  };

  updateContact(person: any) {
    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.Contact.update(person).then(() => {
        this.isSaving = false;
        this.toaster.pop("success", "Updated " + person.name);
        resolve();
      })
      .catch(() => {reject();});
    })
  };

  removeContact(person: any) {

    return new Promise<void>((resolve, reject) => {
      this.isDeleting = true;
      var name = person.name;
      console.log(person);
      console.log(this.Contact)
      this.Contact.remove(person).then(() => {
        console.log('deleted')
        this.isDeleting = false;
        var index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
        this.toaster.pop("success", "Deleted " + name);
        resolve();
      })
      .catch(() => {reject();});
    })
  };

  createContact(person: any) {

    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.Contact.save(person).then(() => {
        this.isSaving = false;
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
        this.toaster.pop("success", "Created " + person.name);
        resolve();
      })
      .catch(() => {reject();});
    })
  }
}

angular
  .module("codecraft")
  .service("ContactService", ContactService);
