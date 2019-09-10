const db = require('./db-connector');
const dbSchema = require('bookshelf-schema')

const Fields = require('bookshelf-schema/lib/fields')
    , StringField = Fields.StringField
    , IntField = Fields.IntField
    , EmailField = Fields.EmailField
    , BooleanField = Fields.BooleanField
    , DateTimeField = Fields.DateTimeField
    , EncryptedStringField = Fields.EncryptedStringField;

const Scope = require('bookshelf-schema/lib/scopes');

db.plugin(dbSchema);

var Users = db.Model.extend({
    tableName: 'users',
    hasTimeStamps: true
},{
    schema: [
        // https://bookshelf-schema.readthedocs.io/en/latest/index.html
        IntField('user_id', { naturalNonZero: true }),
        StringField('f_name'),
        StringField('l_name'),
        StringField('user_name'),
        EmailField('email'),
        EncryptedStringField('password', {minLength: 8}),
        StringField('role'),
        BooleanField('active'),
        DateTimeField('created_at'),
        DateTimeField('updated_at'),
        //HasMany('Photo'),
        Scope('isActive', function(){ return this.where({active: true}); })
    ]
});

module.exports = Users
