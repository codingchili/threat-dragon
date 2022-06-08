import { localRoutes } from '@/router/local.js';

describe('routes/local.js', () => {
    describe('Threat Model', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localThreatModel');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/:threatmodel');
        });

        it('uses the Threat Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ThreatModel');
        });
    });

    describe('Threat Model Edit', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localThreatModelEdit');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/:threatmodel/edit');
        });

        it('uses the Threat Model Edit view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ThreatModelEdit');
        });
    });

    describe('Diagram Edit', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localDiagramEdit');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/:threatmodel/edit/:diagram');
        });

        it('uses the Diagram Edit view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('DiagramEdit');
        });
    });


    describe('New Threat Model', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localNewThreatModel');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/threatmodel/new');
        });

        it('uses the New Threat Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('NewThreatModel');
        });
    });

    describe('Threat Model Import', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localThreatModelImport');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/threatmodel/import');
        });

        it('uses the Import Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ImportModel');
        });
    });

    describe('Report Model', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localReport');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/:threatmodel/report');
        });

        it('uses the Report Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ReportModel');
        });
    });
    
    describe('Upgrade Diagram', () => {
        let route;

        beforeEach(() => {
            route = localRoutes
                .find(x => x.name === 'localUpgrade');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/local/:threatmodel/upgrade');
        });

        it('uses the Upgrade Diagram view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('UpgradeDiagram');
        });
    });
});
