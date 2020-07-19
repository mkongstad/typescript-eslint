import * as eslintVisitorKeys from 'eslint-visitor-keys';

interface VisitorKeys {
  readonly [type: string]: readonly string[] | undefined;
}

const visitorKeys: VisitorKeys = eslintVisitorKeys.unionWith({
  // Additional estree nodes.
  Import: [],
  // ES2020
  ImportExpression: ['source'],
  // Additional Properties.
  ArrayPattern: ['decorators', 'elements', 'typeAnnotation'],
  ArrowFunctionExpression: ['typeParameters', 'params', 'returnType', 'body'],
  ClassDeclaration: [
    'decorators',
    'id',
    'typeParameters',
    'superClass',
    'superTypeParameters',
    'implements',
    'body',
  ],
  ClassExpression: [
    'decorators',
    'id',
    'typeParameters',
    'superClass',
    'superTypeParameters',
    'implements',
    'body',
  ],
  TaggedTemplateExpression: ['tag', 'typeParameters', 'quasi'],
  FunctionDeclaration: ['id', 'typeParameters', 'params', 'returnType', 'body'],
  FunctionExpression: ['id', 'typeParameters', 'params', 'returnType', 'body'],
  Identifier: ['decorators', 'typeAnnotation'],
  MethodDefinition: ['decorators', 'key', 'value'],
  ObjectPattern: ['decorators', 'properties', 'typeAnnotation'],
  RestElement: ['decorators', 'argument', 'typeAnnotation'],
  NewExpression: ['callee', 'typeParameters', 'arguments'],
  CallExpression: ['callee', 'typeParameters', 'arguments'],
  // JSX
  JSXOpeningElement: ['name', 'typeParameters', 'attributes'],
  JSXClosingFragment: [],
  JSXOpeningFragment: [],
  JSXSpreadChild: ['expression'],

  // Additional Nodes.
  ClassProperty: ['decorators', 'key', 'typeAnnotation', 'value'],
  Decorator: ['expression'],
  TSAbstractClassProperty: ['decorators', 'key', 'typeAnnotation', 'value'],
  TSAbstractKeyword: [],
  TSAbstractMethodDefinition: ['key', 'value'],
  TSAnyKeyword: [],
  TSArrayType: ['elementType'],
  TSAsExpression: ['expression', 'typeAnnotation'],
  TSAsyncKeyword: [],
  TSBigIntKeyword: [],
  TSBooleanKeyword: [],
  TSCallSignatureDeclaration: ['typeParameters', 'params', 'returnType'],
  TSClassImplements: ['expression', 'typeParameters'],
  TSConditionalType: ['checkType', 'extendsType', 'trueType', 'falseType'],
  TSConstructSignatureDeclaration: ['typeParameters', 'params', 'returnType'],
  TSConstructorType: ['typeParameters', 'params', 'returnType'],
  TSDeclareFunction: ['id', 'typeParameters', 'params', 'returnType', 'body'],
  TSDeclareKeyword: [],
  TSEmptyBodyFunctionExpression: [
    'id',
    'typeParameters',
    'params',
    'returnType',
  ],
  TSEnumDeclaration: ['id', 'members'],
  TSEnumMember: ['id', 'initializer'],
  TSExportAssignment: ['expression'],
  TSExportKeyword: [],
  TSExternalModuleReference: ['expression'],
  TSImportType: ['parameter', 'qualifier', 'typeParameters'],
  TSInferType: ['typeParameter'],
  TSLiteralType: ['literal'],
  TSIntersectionType: ['types'],
  TSIndexedAccessType: ['indexType', 'objectType'],
  TSIndexSignature: ['parameters', 'typeAnnotation'],
  TSInterfaceBody: ['body'],
  TSInterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
  TSInterfaceHeritage: ['expression', 'typeParameters'],
  TSImportEqualsDeclaration: ['id', 'moduleReference'],
  TSFunctionType: ['typeParameters', 'params', 'returnType'],
  TSMappedType: ['typeParameter', 'typeAnnotation'],
  TSMethodSignature: ['typeParameters', 'key', 'params', 'returnType'],
  TSModuleBlock: ['body'],
  TSModuleDeclaration: ['id', 'body'],
  TSNamespaceExportDeclaration: ['id'],
  TSNonNullExpression: ['expression'],
  TSNeverKeyword: [],
  TSNullKeyword: [],
  TSNumberKeyword: [],
  TSObjectKeyword: [],
  TSOptionalType: ['typeAnnotation'],
  TSParameterProperty: ['decorators', 'parameter'],
  TSParenthesizedType: ['typeAnnotation'],
  TSPrivateKeyword: [],
  TSPropertySignature: ['typeAnnotation', 'key', 'initializer'],
  TSProtectedKeyword: [],
  TSPublicKeyword: [],
  TSQualifiedName: ['left', 'right'],
  TSReadonlyKeyword: [],
  TSRestType: ['typeAnnotation'],
  TSStaticKeyword: [],
  TSStringKeyword: [],
  TSSymbolKeyword: [],
  TSThisType: [],
  TSTupleType: ['elementTypes'],
  TSTypeAliasDeclaration: ['id', 'typeParameters', 'typeAnnotation'],
  TSTypeAnnotation: ['typeAnnotation'],
  TSTypeAssertion: ['typeAnnotation', 'expression'],
  TSTypeLiteral: ['members'],
  TSTypeOperator: ['typeAnnotation'],
  TSTypeParameter: ['name', 'constraint', 'default'],
  TSTypeParameterDeclaration: ['params'],
  TSTypeParameterInstantiation: ['params'],
  TSTypePredicate: ['typeAnnotation', 'parameterName'],
  TSTypeReference: ['typeName', 'typeParameters'],
  TSTypeQuery: ['exprName'],
  TSUnionType: ['types'],
  TSUndefinedKeyword: [],
  TSUnknownKeyword: [],
  TSVoidKeyword: [],
});

export { visitorKeys, VisitorKeys };