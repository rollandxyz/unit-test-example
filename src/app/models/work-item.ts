export class WorkItem {
    public constructor(
        private id: number,
        private name: string,
        private description?: string,
        private payload?: string,
        public createdBy?: number,
        public lastUpdatedBy?: number,
    ) {
        this.createdBy = createdBy ? this.createdBy : -1;
    }
    getName(): string {
        return this.name;
    }
    setDescription(desc: string) {
        this.description = desc;
    }
    getDescription(): string {
        return this.description;
    }

    setPayload(payload: string) {
        this.payload = payload;
    }
    getPayload(): string {
        return this.payload;
    }
}
