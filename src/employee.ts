class Employee {
    id: number;
    name: string;
    phone: string;
    email: string;
    constructor(id: number, name: string, phone: string, email: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    toString(): string {
        let output =
            `Employee Record --- ID: ${this.id}\n` +
            `Name: ${this.name}\n` +
            `Contact Information\n` +
            `\tPhone: ${this.phone}\n` +
            `\tEmail: ${this.email}\n`;
        return output;
    }
}

let firstEmployee = new Employee(
    1,
   'Test Person',
   '4809936836',
   'test@person.com'
);
console.log(firstEmployee.toString());