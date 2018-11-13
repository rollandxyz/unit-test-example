import { WorkItem } from '../models/work-item';

describe('WorkItem without Angular testing support', () => {
    let workItem: WorkItem;
    beforeEach(() => {
        workItem = new WorkItem(1, 'work-01', 'work item one');
    });

    it('should be created', () => {
        expect(workItem).toBeTruthy();
    });

    it('#getName should return real value', () => {
        expect(workItem.getName()).toBe('work-01');
    });

    it('#getDescription & setDescription test', () => {
        workItem.setDescription('changed description');

        expect(workItem.getDescription()).toBe('changed description');
    });

    it('#getDescription & setDescription test', () => {
        workItem.setPayload('new payload');

        expect(workItem.getPayload()).toBe('new payload');
    });

    it('#createdBy should be -1', () => {
        workItem.setPayload('new payload');
        expect(workItem.createdBy).toBe(-1);
    });
});
