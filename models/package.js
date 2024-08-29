class Package {
  constructor(
    id,
    title,
    weight,
    destination,
    description,
    createdAt,
    isAllocated,
    driver_id
  ) {
    this.id = id;
    this.title = title;
    this.weight = weight;
    this.destination = destination;
    this.description = description;
    this.createdAt = createdAt;
    this.isAllocated = isAllocated;
    this.driver_id = driver_id;
  }
}

module.exports = Package;
