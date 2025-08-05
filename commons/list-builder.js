class List {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
}

class ListBuilder {
    setName(name) {
        this.name = name;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    build() {
        return new List(this.name, this.data);
    }
}

class Data {
    constructor(color, year, capacity, price, generation, CPU_model, hard_disk_size) {
        this.color = color;
        this.year = year;
        this.capacity = capacity;
        this.price = price;
        this.generation = generation;
        this['CPU model'] = CPU_model;
        this['Hard disk size'] = hard_disk_size;
    }
}

class DataBuilder {
    setColor(color) {
        this.color = color;
        return this;
    }

    setYear(year) {
        this.year = year;
        return this;
    }

    setCapacity(capacity) {
        this.capacity = capacity;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setGeneration(generation) {
        this.generation = generation;
        return this;
    }

    setCPUModel(CPU_model) {
        this['CPU model'] = CPU_model;
        return this;
    }

    setHardDiskSize(hard_disk_size) {
        this['Hard disk size'] = hard_disk_size;
        return this;
    }

    build() {
        return new Data(this.color, this.year, this.capacity, this.price, this.generation, this['CPU model'], this['Hard disk size']);
    }
}

export { ListBuilder, DataBuilder };