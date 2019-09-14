
module.exports = {
  name: 'favicon',
  version: '1.0.0',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/favicon.ico',
      handler(request, context) {
        const icon = new Buffer('iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADc0lEQVR4Ae1XA4xt' +
        'WRB8a9u24rU3Wm+wtq1v27ZtG2Pbtm3bM7d+10/OzeiOPVNJvffmzElXdZ/uc3NND1rOvfEBi7kBQvQlRTeA2ib+e' +
        'MDy4qJG9oG4rkNtU6NF9CWV5sAw0F8cagZGDIwY4MXC7zm413wW7hHeL7+51hcGKCTCs3GX2Uz8F3gC08LM8KLDKt' +
        'x6fhr/R/aeASX+vttWNMeBFD/ceHZK7xpg2e82nwmFvwOP4SP3bQgvyQIxKugkj6XjBuhWZcXAdwkZgEJcb7yP53y' +
        '72XT8K2Un/gg4ijvMZuA+i9m44exkECHFGbjl3NSOGVCNdP3ZSfjaex82xrthc4K7CBzneTKwbpDmnrBeiHmR1vAq' +
        'SALxgftWfc8Vp8ejur4OaZVFuE7iMSGuGxpQ4o9ZL0BudRlaw3tuW8Bq3C38xe8QmsMhNwasyHVnJmFCyFkQORLrU' +
        '6/d+N73AKfD2ADFmWVNQz2Ieq0B6+NcsDrWCcW1VVB4XAw+JGYVTqWH4Df/IzDLDJf1ebhNYjjmxoLQNA2NQGPGBl' +
        'jSZTH2aq8Emg6SGV11egKKaitB7En2wQ+SjYLp2L/g+HEvk7hdvk+Lqar6WhB1kkh6ZTEyhJwIQwM3SaMklueDsM+' +
        'JwSdeu/C1zz6Qn0kJz2WGgUitKMLLjquhYC6Z/yzH8ZTNIrDxaIKZ7kryApFUXgDTydESfworZ2yAjadBQ0dgOjEK' +
        'rnnxaI6UikI8b7+CVeAdoNYo3v4U0H1lXQ0IZwm+IMoGi6PtdM6Xv9nxcyOswJKzs/+SmXfOjQP7pTEo2GkDbB6VV' +
        'UBRGi47NRbsWpIZfei+TQxY4RnbxbhZjust5/XgVPD31dIj77lvgQI7fq/0CpEsBljd+y3aGUPO76dy7grbEj2kKl' +
        'PA4M85rNCb6lxGGLbI3UAU1lSAlWOGNKnwhfcetUe/H15zWkuNtu8BBjqWFghjaGBFHrNagMYIKEqFQp1WDxp/x3U' +
        'ziA6PoTLBjCaFnkN1Qx0awyEnVr+smMlz0myxpblojKjSbDxlvQjcw/H9L+gEyuqqQRTVVjF2+wZIZskme1pGSz1W' +
        '2SPqeaCeA6wYzbzkuAoPWPLvqfoeFYei156ZyG/jMWzOxiKkCmr07GCDGe0xJg2MvBnx5dSif15OqU0DNwr75/XcY' +
        'u5NFwBUwEC6iXPE5wAAAABJRU5ErkJggg==', 'base64');

        const response = context.response(icon);
        response.type('image/png');
        return response;
      }
    });
  }
};
