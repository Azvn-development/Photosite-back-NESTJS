"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepositoty = void 0;
class BaseRepositoty {
    constructor(repository) {
        this._repository = repository;
    }
    async transactional(action) {
        return await this._repository.manager.transaction(action);
    }
}
exports.BaseRepositoty = BaseRepositoty;
//# sourceMappingURL=base.repository.js.map