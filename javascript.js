
// DefinE a House class
class House {
    // Constructor to initialize house details
    constructor(address, numRooms, yearBuilt) {
        this.address = address;
        this.numRooms = numRooms;
        this.yearBuilt = yearBuilt;
        this.isOccupied = false; // House is initially unoccupied
    }

    // Method to occupy the house
    occupy() {
        if (!this.isOccupied) {
            this.isOccupied = true;
            console.log(`The house at ${this.address} is now occupied.`);
        } else {
            console.log(`The house at ${this.address} is already occupied.`);
        }
    }

    // Method to vacate the house
    vacate() {
        if (this.isOccupied) {
            this.isOccupied = false;
            console.log(`The house at ${this.address} is now vacant.`);
        } else {
            console.log(`The house at ${this.address} is already vacant.`);
        }
    }

    // Method to display house details
    displayInfo() {
        console.log(`House Address: ${this.address}, Number of Rooms: ${this.numRooms}, Year Built: ${this.yearBuilt}`);
    }
}

// Create house objects
const house1 = new House('123 Maple St', 4, 1995);
const house2 = new House('456 Oak Ave', 3, 2005);

// Example usage
house1.displayInfo();
house1.occupy();
house1.vacate();