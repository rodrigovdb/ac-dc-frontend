class Album {
    constructor(id, name, year, coverImage, totalDuration, songs = []){
        this.id = id;
        this.name = name;
        this.year = year;
        this.coverImage = coverImage;
        this.totalDuration = totalDuration;
        this.songs = songs;
    }

    static fromJson(object){
        return new Album(
            object.id,
            object.name,
            object.year,
            object.coverImage,
            object.totalDuration,
            object.songs);
    }
}

export default Album;