class Album {
    constructor(id, name, year, coverImage, totalDuration, songs = []){
        this.id = id;
        this.name = name;
        this.year = year;
        this.coverImage = coverImage;
        this.totalDuration = totalDuration;
        this.songs = songs;
        this.errors = [];
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

    isValid(){
        this.errors = [];

        if(this.name == undefined){
            this.errors.push('name is invalid');
        }

        if(this.year == undefined || this.year == NaN){
            this.errors.push('year is invalid');
        }

        if(this.coverImage == undefined){
            this.errors.push('coverImage is invalid');
        }

        return this.errors.length === 0;
    }
}

export default Album;