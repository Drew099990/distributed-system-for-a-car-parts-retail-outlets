export {}

// Create a type for the roles
export type Roles = 'admin'  | "manager"
export type warehouse = 'warehouse'
export type normal = "outlet"

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      manager?: Roles,
      warehouse?: warehouse
      ,normal?:normal
    }
  }
}