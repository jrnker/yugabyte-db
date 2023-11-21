// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 * 
 * @export
 * @interface ConnectionStats
 */
export interface ConnectionStats  {
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  active_logical_connections: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  queued_logical_connections: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  idle_or_pending_logical_connections: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  active_physical_connections: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  idle_physical_connections: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  avg_wait_time_ns: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  qps: number;
  /**
   * 
   * @type {number}
   * @memberof ConnectionStats
   */
  tps: number;
}


