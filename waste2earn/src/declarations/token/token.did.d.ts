import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'balanceOf' : ActorMethod<[Principal], bigint>,
  'getSymbol' : ActorMethod<[], string>,
  'payOut' : ActorMethod<[], string>,
  'transfer' : ActorMethod<[Principal, bigint], string>,
}
