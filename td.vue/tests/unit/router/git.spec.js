import { gitRoutes } from '@/router/git.js';

describe('routes/git.js', () => {
    describe('Repository Access', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitRepository');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/repository');
        });

        it('uses the Repository Access view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('RepositoryAccess');
        });
    });

    describe('Branch Access', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitBranch');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/branch');
        });

        it('uses the Branch Access view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('BranchAccess');
        });
    });

    describe('Threat Model Select', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitThreatModelSelect');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/threatmodels');
        });

        it('uses the Threat Model Select view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ThreatModelSelect');
        });
    });

    describe('New Threat Model', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitNewThreatModel');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/new');
        });

        it('uses the New Threat Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('NewThreatModel');
        });
    });

    describe('Threat Model', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitThreatModel');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/:threatmodel');
        });

        it('uses the Threat Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ThreatModel');
        });
    });

    describe('Threat Model Edit', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitThreatModelEdit');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/:threatmodel/edit');
        });

        it('uses the Threat Model Edit view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ThreatModelEdit');
        });
    });

    describe('Diagram Edit', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitDiagramEdit');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/:threatmodel/edit/:diagram');
        });

        it('uses the Diagram Edit view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('DiagramEdit');
        });
    });

    describe('Report Model', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitReport');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/:threatmodel/report');
        });

        it('uses the Report Model view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('ReportModel');
        });
    });

    describe('Upgrade Diagram', () => {
        let route;

        beforeEach(() => {
            route = gitRoutes
                .find(x => x.name === 'gitUpgrade');
        });

        it('uses the expected path', () => {
            expect(route.path).toEqual('/git/:provider/:repository/:branch/:threatmodel/upgrade');
        });

        it('uses the Upgrade Diagram view as a lazily loaded component', async () => {
            const cmp = await route.component();
            expect(cmp.default.name).toEqual('UpgradeDiagram');
        });
    });
});