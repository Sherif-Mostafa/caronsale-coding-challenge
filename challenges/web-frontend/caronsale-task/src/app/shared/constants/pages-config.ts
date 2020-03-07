export let config = {
    LOGIN: {
        'name': 'login',
        'route': '/login',
        'loadChildren': '../app/login/login.module#LoginModule'
    },
    OVERVIEW: {
        'name': 'overview',
        'route': '/overview',
        'loadChildren': '../app/overview/overview.module#OverviewModule'
    },
}