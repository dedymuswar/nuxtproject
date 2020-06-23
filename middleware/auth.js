export default function (context) {
    console.log('(Middleware) auth');
    if(!context.store.getters.isAutheticated){
        context.redirect('/admin/auth')
    }
}